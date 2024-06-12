const express = require('express');
const path = require('path');
const cors = require('cors');
const moment = require('moment');
const mysql = require('mysql2/promise');
const app = express();
require('dotenv').config(); 

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.static(path.join(__dirname, "public")));

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    dialect: process.env.DB_DIALECT 
});
module.exports = connection;

/* cliente */
app.post('/cadastrar_cliente', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newData.createdAt = now;
        newData.updatedAt = now;
        await connection.query('INSERT INTO cliente SET ?', newData/* , clienteData */);
        
        res.status(200).send('Cliente cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o cliente:', error);
        res.status(500).send('Erro ao cadastrar cliente');
    }
});

app.get('/clientes', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT * from cliente');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar cliente:', error);
        res.status(500).send('Erro ao buscar cliente');
    }
});

app.get('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [rows, fields] = await connection.query('SELECT * from cliente WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]); 
        } else {
            res.status(404).send('Cliente não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar cliente:', error);
        res.status(500).send('Erro ao buscar cliente');
    }
});

app.get('/clientes/cpf/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    try {
        const [rows, fields] = await connection.query('SELECT * FROM cliente WHERE cpf = ?', [cpf]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('CPF não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar CPF:', error);
        res.status(500).send('Erro ao buscar CPF');
    }
});

app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    try {
      
      await connection.query('DELETE FROM cliente WHERE id = ?', [id]);
      
      res.status(200).send('Cliente deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
      res.status(500).send('Erro ao deletar cliente');
    }
});

app.put('/editar_cliente', async (req, res) => {
    const newData = req.body;
    try {
        await connection.query('UPDATE cliente SET nome = ?, nomeSocial = ?, email = ?, genero = ?, cpf = ?, dataEmissaoCpf = ?, estado = ?, cidade = ?, bairro = ?, rua = ?, numero = ?, cep = ?, informacoes_adicionais = ? WHERE id = ?', [newData.nome, newData.nomeSocial, newData.email, newData.genero, newData.cpf, newData.dataEmissaoCpf, newData.estado, newData.cidade, newData.bairro, newData.rua, newData.numero, newData.cep, newData.informacoes_adicionais, newData.id]);

        res.status(200).send('Dados atualizados com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar clientes:', error);
        res.status(500).send('Erro ao atualizar clientes');
    }
});


/* telefone */
app.post('/cadastrar_telefone', async (req, res) => {
    const newDataTelefone = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newDataTelefone.createdAt = now;
        newDataTelefone.updatedAt = now;
        
        await connection.query('INSERT INTO telefones SET ?', newDataTelefone);
        
        res.status(200).send('Telefones cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o Telefones:', error);
        res.status(500).send('Erro ao cadastrar Telefones');
    }
});

app.get('/telefones', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT id, id_cliente, telefone from telefones');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar telefone:', error);
        res.status(500).send('Erro ao buscar telefones');
    }
});

app.get('/telefones/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [rows, fields] = await connection.query('SELECT * from telefones WHERE id_cliente = ?', [id]);
        if (rows.length > 0) {
            res.json(rows); 
        } else {
            res.status(404).send('Telefone não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar telefone:', error);
        res.status(500).send('Erro ao buscar telefone');
    }
});

app.put('/editar_telefones', async (req, res) => {
    const newDataTelefone = req.body;
    try {
        await connection.query('UPDATE telefones SET telefone = ? WHERE id = ?', [newDataTelefone.telefone, newDataTelefone.id]);

        res.status(200).send('Dados atualizados com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar telefones:', error);
        res.status(500).send('Erro ao atualizar telefones');
    }
});


/* Dados do RG */
app.post('/cadastrar_dadosRG', async (req, res) => {
    const newDataDadosRG = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newDataDadosRG.createdAt = now;
        newDataDadosRG.updatedAt = now;
        
        await connection.query('INSERT INTO rgs SET ?', newDataDadosRG);
        
        res.status(200).send('RGs cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o RGs:', error);
        res.status(500).send('Erro ao cadastrar RGs');
    }
});

app.get('/rgs', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT id, id_cliente, rg, uf_rg, dataEmissaoRG from rgs');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar dados do rg:', error);
        res.status(500).send('Erro ao buscar dados do rg');
    }
});

app.get('/rgs/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [rows, fields] = await connection.query('SELECT id, rg, uf_rg, dataEmissaoRG from rgs WHERE id_cliente = ?', [id]);
        if (rows.length > 0) {
            res.json(rows); 
        } else {
            res.status(404).send('RG não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar rg:', error);
        res.status(500).send('Erro ao buscar rg');
    }
});

app.put('/editar_rgs', async (req, res) => {
    const newDataRg = req.body;
    try {
        await connection.query('UPDATE rgs SET rg = ?, uf_rg = ?, dataEmissaoRG = ? WHERE id = ?', [newDataRg.rg, newDataRg.uf_rg, newDataRg.dataEmissaoRG, newDataRg.id]);

        res.status(200).send('Dados atualizados com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar rgs:', error);
        res.status(500).send('Erro ao atualizar rgs');
    }
});


/* produto */
app.post('/cadastrar_produto', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO produtos SET ?', newData);
        
        res.status(200).send('Produto cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o Produto:', error);
        res.status(500).send('Erro ao cadastrar Produto');
    }
});

app.put('/editar_produto', async (req, res) => {
    const newData = req.body;
    try {
        await connection.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [newData.nome, newData.preco, newData.id]);

        res.status(200).send('Dados atualizados com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).send('Erro ao atualizar produto');
    }
});  

app.get('/produtos', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT id, nome, preco from produtos');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos');
    }
});

app.get('/produtos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [rows, fields] = await connection.query('SELECT id, nome, preco from produtos WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]); 
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        res.status(500).send('Erro ao buscar produto');
    }
});

app.delete('/produtos/:id', async (req, res) => {
    const id = req.params.id;
    try {
      
      await connection.query('DELETE FROM produtos WHERE id = ?', [id]);
      
      res.status(200).send('Produto deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      res.status(500).send('Erro ao deletar produto');
    }
});


/* servico */
app.post('/cadastrar_servico', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO servicos SET ?', newData);
        
        res.status(200).send('Serviço cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o serviço:', error);
        res.status(500).send('Erro ao cadastrar serviço');
    }
});

app.put('/editar_servicos', async (req, res) => {
    const updatedData = req.body;
    try {
    await connection.query('UPDATE servicos SET nome = ?, preco = ? WHERE id = ?', [updatedData.nome, updatedData.preco, updatedData.id]);

    res.status(200).send('Dados atualizados com sucesso');
    } catch (error) {
        console.error('Erro ao buscar servicos:', error);
        res.status(500).send('Erro ao buscar servicos');
    }
});

app.get('/servicos', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT id, nome, preco from servicos');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar servicos:', error);
        res.status(500).send('Erro ao buscar servicos');
    }
});

app.get('/servicos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [rows, fields] = await connection.query('SELECT id, nome, preco from servicos WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]); 
        } else {
            res.status(404).send('Servico não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar servico:', error);
        res.status(500).send('Erro ao buscar servico');
    }
});

app.delete('/servicos/:id', async (req, res) => {
    const id = req.params.id;
    try {
      
      await connection.query('DELETE FROM servicos WHERE id = ?', [id]);
      
      res.status(200).send('Servicos deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar servicos:', error);
      res.status(500).send('Erro ao deletar servicos');
    }
});

app.put('/editar_servico', async (req, res) => {
    const newData = req.body;
    try {
        await connection.query('UPDATE servicos SET nome = ?, preco = ? WHERE id = ?', [newData.nome, newData.preco, newData.id]);

        res.status(200).send('Dados atualizados com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar servico:', error);
        res.status(500).send('Erro ao atualizar servico');
    }
}); 


/* consumo servico */
app.post('/cadastrar_consumo_servico', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO consumoservico SET ?', newData);
        
        res.status(200).send('Consumo do Serviço cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o Consumo do Serviço:', error);
        res.status(500).send('Erro ao cadastrar Consumo do Serviço');
    }
});

app.get('/consumo_servico', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT * from consumoservico');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar consumoservico:', error);
        res.status(500).send('Erro ao buscar consumoservico');
    }
});

/* consumo produto */
app.post('/cadastrar_consumo_produto', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO consumoproduto SET ?', newData);
        
        res.status(200).send('Consumo do Produto cadastrado');
    } catch (error) {
        console.error('Erro ao adicionar o Consumo do Produto:', error);
        res.status(500).send('Erro ao cadastrar Consumo do Produto');
    }
});

app.get('/consumo_produto', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT * from consumoproduto');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar consumoproduto:', error);
        res.status(500).send('Erro ao buscar consumoproduto');
    }
});


/* listagem */
app.get('/lista1', async (req, res) => {
   /* Lista dos 10 clientes que mais consumiram em quantidade.*/
    try {
        const [rows, fields] = await connection.query(
            `SELECT nome, SUM(quantidade) as totalQuantidade
            FROM (
                SELECT nome, quantidade
                FROM consumoproduto
                UNION ALL
                SELECT nome, 1 as quantidade
                FROM consumoservico
            ) AS combined
            GROUP BY nome
            ORDER BY totalQuantidade DESC
            LIMIT 10;`
        );
        console.log(rows);

        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});

app.get('/lista4', async (req, res) => {
    /* Produtos ou serviços mais consumidos por gênero. */
    try {
        const [rows] = await connection.query(
            `SELECT nome, genero, SUM(quantidade) as totalQuantidade
            FROM (
                SELECT cp.produto AS nome, c.genero, cp.quantidade
                FROM consumoproduto cp
                JOIN cliente c ON cp.cpf = c.cpf
                UNION ALL
                SELECT cs.servico AS nome, c.genero, 1 as quantidade
                FROM consumoservico cs
                JOIN cliente c ON cs.cpf = c.cpf
            ) AS combined
            GROUP BY nome, genero
            ORDER BY genero, totalQuantidade DESC;`
        );

        const result = {
            Feminino: [],
            Masculino: [],
            Outro: []
        };

        rows.forEach(row => {
            if (row.genero === 'Feminino') {
                result.Feminino.push(row);
            } else if (row.genero === 'Masculino') {
                result.Masculino.push(row);
            } else if (row.genero === 'Outro') {
                result.Outro.push(row);
            }
        });

        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});

app.get('/lista5', async (req, res) => {
    /* 10 clientes que menos consumiram produtos ou serviços. */
    try {
        const [rows, fields] = await connection.query(
            `SELECT nome, SUM(quantidade) as totalQuantidade
            FROM (
                SELECT nome, quantidade
                FROM consumoproduto
                UNION ALL
                SELECT nome, 1 as quantidade
                FROM consumoservico
            ) AS combined
            GROUP BY nome
            ORDER BY totalQuantidade ASC
            LIMIT 10;`
        );
        console.log(rows);

        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});

app.get('/lista6', async (req, res) => {
    /* Lista dos 5 clientes que mais consumiram em valor */
    try {
        const [rows, fields] = await connection.query(
            `SELECT nome, SUM(preco) as totalPreco
            FROM (
                SELECT nome, preco
                FROM consumoproduto
                UNION ALL
                SELECT nome, preco
                FROM consumoservico
            ) AS combined
            GROUP BY nome
            ORDER BY totalPreco DESC
            LIMIT 5;`
        );
        console.log(rows);

        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});


/* porta */
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
