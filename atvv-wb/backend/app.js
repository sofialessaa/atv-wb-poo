const express = require('express');
const path = require('path');
const cors = require('cors');
const moment = require('moment');
const mysql = require('mysql2/promise');
const app = express();

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
    host: 'localhost',
    user: 'root',
    password: 'olivia',
    database: 'worldBeauty'
});

/* cliente */
app.post('/cadastrar_cliente', async (req, res) => {
    const newData = req.body;
    try {
        const now = moment().format('YYYY-MM-DD');
        newData.createdAt = now;
        newData.updatedAt = now;
        
        await connection.query('INSERT INTO cliente SET ?', newData);
        
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

app.get('/produtos', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT id, nome, preco from produtos');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos');
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
app.get('/servicos', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT id, nome, preco from servicos');
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar servicos:', error);
        res.status(500).send('Erro ao buscar servicos');
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


/* porta */
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});