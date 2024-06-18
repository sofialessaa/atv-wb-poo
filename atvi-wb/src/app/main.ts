import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/clientes/cadastroCliente";
import CadastroProduto from "../negocio/produtos/cadastroProduto";
import CadastroServico from "../negocio/servicos/cadastroServico";
import ListagemClientes from "../negocio/clientes/listagemClientes";
import ListagemProdutos from "../negocio/produtos/listagemProdutos";
import ListagemServicos from "../negocio/servicos/listagemServico";
import UpdateCliente from "../negocio/clientes/updateCliente";
import UpdateProduto from "../negocio/produtos/updateProduto";
import UpdateServico from "../negocio/servicos/updateServico";
import DeleteCliente from "../negocio/clientes/deleteCliente";
import DeleteProduto from "../negocio/produtos/deleteProduto";
import DeleteServico from "../negocio/servicos/deleteServico";
import CompraProduto from "../negocio/consumo/compraProduto";
import ComprarServico from "../negocio/consumo/compraServico";
import ListaClienteMCQuantidade from "../negocio/listagem/listaClienteMCQuantidade";
import ListaClientesPorGenero from "../negocio/listagem/listaClientesPorGenero";
import ListaGeralServicoProdutoMC from "../negocio/listagem/listaGeralServicoProdutoMC";
import ListaServicoProdutoMCGenero from "../negocio/listagem/listaServicoProdutoMCGenero";
import ListaClienteMenosCProdutoServico from "../negocio/listagem/listaClienteMenosCProdutoServico";
import ListaClienteMCValor from "../negocio/listagem/listaClienteMCValor";
import ListaPedidoProduto from "../negocio/consumo/listadePedidoProduto";
import ListaPedidoServico from "../negocio/consumo/listadePedidoServico";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Genero from "../modelo/genero";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

let empresa = new Empresa()

console.log(`Bem-vindo - Grupo World Beauty`)

let cliente1 = new Cliente("Sofia Lessa", "Sofia", new CPF('000.000.000-00', new Date(2024, 1, 27)), Genero.FEMININO, [new RG('00.000.000-0', new Date(2023, 1, 27), 'SP')], new Date().toISOString(), [new Telefone('12', '0000-0000')]);
let cliente2 = new Cliente('Paula Nobre', 'Paula', new CPF('111.111.111-11', new Date(2022, 8, 22)), Genero.FEMININO, [new RG('11.111.111-1', new Date(2020, 8, 22), 'SP')], new Date().toISOString(), [new Telefone('11', '1111-1111')]);
let cliente3 = new Cliente('Taylor Swift', 'Swift', new CPF('123.456.789-10', new Date(1989, 11, 13)), Genero.FEMININO, [new RG('12.345.678-9', new Date(2007, 5, 15), 'CA')], new Date().toISOString(), [new Telefone('12', '1234-5678')]);
let cliente4 = new Cliente('Jonathan Calleri', 'Calleri', new CPF('222.222.222-22', new Date(2024, 1, 27)), Genero.MASCULINO, [new RG('22.222.222-2', new Date(2023, 1, 27), 'SP')], new Date().toISOString(), [new Telefone('12', '2222-2222')]);
let cliente5 = new Cliente('Maria Silva', 'Maria', new CPF('333.333.333-33', new Date(1990, 5, 14)), Genero.FEMININO, [new RG('33.333.333-3', new Date(2008, 3, 21), 'RJ')], new Date().toISOString(), [new Telefone('21', '3333-3333')]);
let cliente6 = new Cliente('Marcos Silva', 'Marcos', new CPF('444.444.444-44', new Date(1985, 10, 22)), Genero.MASCULINO, [new RG('44.444.444-4', new Date(2002, 7, 30), 'MG')], new Date().toISOString(), [new Telefone('31', '4444-4444')]);
let cliente7 = new Cliente('Beatriz Oliveira', 'Bia', new CPF('555.555.555-55', new Date(2000, 8, 15)), Genero.FEMININO, [new RG('55.555.555-5', new Date(2018, 9, 17), 'SP')], new Date().toISOString(), [new Telefone('11', '5555-5555')]);
let cliente8 = new Cliente('Carlos Eduardo', 'Carlos', new CPF('666.666.666-66', new Date(1992, 3, 9)), Genero.MASCULINO, [new RG('66.666.666-6', new Date(2010, 4, 12), 'RS')], new Date().toISOString(), [new Telefone('51', '6666-6666')]);
let cliente9 = new Cliente('Ana Clara', 'Ana', new CPF('777.777.777-77', new Date(1988, 11, 25)), Genero.FEMININO, [new RG('77.777.777-7', new Date(2005, 6, 28), 'BA')], new Date().toISOString(), [new Telefone('71', '7777-7777')]);
let cliente10 = new Cliente('Lucas Pereira', 'Lucas', new CPF('888.888.888-88', new Date(1995, 4, 19)), Genero.MASCULINO, [new RG('88.888.888-8', new Date(2012, 1, 4), 'PR')], new Date().toISOString(), [new Telefone('41', '8888-8888')]);
let cliente11 = new Cliente('Mariana Souza', 'Mari', new CPF('999.999.999-99', new Date(1983, 6, 11)), Genero.FEMININO, [new RG('99.999.999-9', new Date(2000, 11, 20), 'PE')], new Date().toISOString(), [new Telefone('81', '9999-9999')]);
let cliente12 = new Cliente('Pedro Alvares', 'Pedro', new CPF('101.010.101-01', new Date(1997, 4, 15)), Genero.MASCULINO, [new RG('10.101.010-1', new Date(2015, 6, 25), 'SP')], new Date().toISOString(), [new Telefone('12', '1010-1010')]);
let cliente13 = new Cliente('Clara Lima', 'Clara', new CPF('202.202.202-20', new Date(1993, 9, 10)), Genero.OUTRO, [new RG('20.202.020-2', new Date(2011, 8, 15), 'RJ')], new Date().toISOString(), [new Telefone('21', '2020-2020')]);
let cliente14 = new Cliente('Lucas Mendes', 'Lucas', new CPF('303.303.303-30', new Date(2000, 11, 5)), Genero.MASCULINO, [new RG('30.303.030-3', new Date(2018, 12, 20), 'MG')], new Date().toISOString(), [new Telefone('31', '3030-3030')]);
let cliente15 = new Cliente('Rafael Santos', 'Rafael', new CPF('505.505.505-50', new Date(1995, 1, 12)), Genero.MASCULINO, [new RG('50.505.050-5', new Date(2010, 3, 11), 'RS')], new Date().toISOString(), [new Telefone('51', '5050-5050')]);
let cliente16 = new Cliente('Gabriela Costa', 'Gabi', new CPF('606.606.606-60', new Date(2001, 2, 23)), Genero.FEMININO, [new RG('60.606.060-6', new Date(2019, 1, 9), 'BA')], new Date().toISOString(), [new Telefone('71', '6060-6060')]);
let cliente17 = new Cliente('Renato Almeida', 'Renato', new CPF('707.707.707-70', new Date(1990, 7, 29)), Genero.MASCULINO, [new RG('70.707.070-7', new Date(2008, 10, 5), 'PR')], new Date().toISOString(), [new Telefone('41', '7070-7070')]);
let cliente18 = new Cliente('Bruna Martins', 'Bruna', new CPF('808.808.808-80', new Date(1985, 10, 17)), Genero.FEMININO, [new RG('80.808.080-8', new Date(2003, 6, 7), 'PE')], new Date().toISOString(), [new Telefone('81', '8080-8080')]);
let cliente19 = new Cliente('Alex Patrocinio', 'Alex', new CPF('909.909.909-90', new Date(1992, 11, 30)), Genero.OUTRO, [new RG('90.909.090-9', new Date(2015, 5, 19), 'SC')], new Date().toISOString(), [new Telefone('48', '9090-9090')]);
let cliente20 = new Cliente('Luiza Oliveira', 'Luiza', new CPF('121.212.121-21', new Date(1998, 7, 10)), Genero.FEMININO, [new RG('12.121.212-1', new Date(2016, 9, 5), 'RJ'), new RG('13.131.313-1', new Date(2017, 8, 10), 'SP')], new Date().toISOString(), [new Telefone('21', '1212-1212')]);
let cliente21 = new Cliente('Arthur Carvalho', 'Arthur', new CPF('232.323.232-32', new Date(1987, 4, 25)), Genero.MASCULINO, [new RG('23.232.323-2', new Date(2005, 10, 15), 'MG'), new RG('24.242.424-2', new Date(2006, 11, 20), 'BA')], new Date().toISOString(), [new Telefone('31', '2323-2323')]);
let cliente22 = new Cliente('Isabela Santos', 'Isabela', new CPF('343.434.343-43', new Date(1993, 3, 17)), Genero.FEMININO, [new RG('34.343.434-3', new Date(2011, 6, 7), 'BA'), new RG('35.353.535-3', new Date(2012, 7, 12), 'PE')], new Date().toISOString(), [new Telefone('81', '3434-3434')]);
let cliente23 = new Cliente('Ricardo Pereira', 'Ricardo', new CPF('454.545.454-54', new Date(1980, 11, 8)), Genero.MASCULINO, [new RG('45.454.545-4', new Date(1998, 5, 20), 'RS'), new RG('46.464.646-4', new Date(1999, 6, 25), 'PR')], new Date().toISOString(), [new Telefone('51', '4545-4545')]);
let cliente24 = new Cliente('Fernanda Lima', 'Fernanda', new CPF('565.656.565-65', new Date(1995, 9, 4)), Genero.OUTRO, [new RG('56.565.656-5', new Date(2013, 8, 15), 'SC'), new RG('57.575.757-5', new Date(2014, 9, 20), 'RS')], new Date().toISOString(), [new Telefone('48', '5656-5656')]);
let cliente25 = new Cliente('Júlia Oliveira', 'Júlia', new CPF('676.767.676-76', new Date(1990, 3, 10)), Genero.FEMININO, [new RG('67.676.767-6', new Date(2008, 5, 15), 'RJ'), new RG('68.686.868-6', new Date(2009, 6, 20), 'SP')], new Date().toISOString(), [new Telefone('21', '6767-6767'), new Telefone('11', '7676-7676')]);
let cliente26 = new Cliente('Paulo Silva', 'Paulo', new CPF('787.878.787-87', new Date(1987, 9, 22)), Genero.MASCULINO, [new RG('78.787.878-7', new Date(2005, 10, 25), 'MG'), new RG('79.797.979-7', new Date(2006, 11, 30), 'BA')], new Date().toISOString(), [new Telefone('31', '7878-7878'), new Telefone('71', '7979-7979')]);
let cliente27 = new Cliente('Camila Lopes Lima', 'Camila', new CPF('898.989.898-98', new Date(1993, 12, 15)), Genero.FEMININO, [new RG('89.898.989-8', new Date(2011, 3, 5), 'RS'), new RG('90.909.090-9', new Date(2012, 4, 10), 'SC')], new Date().toISOString(), [new Telefone('51', '8989-8989'), new Telefone('48', '9090-9090')]);
let cliente28 = new Cliente('Mateus Vieira', 'Mateus', new CPF('012.121.212-12', new Date(1988, 5, 8)), Genero.MASCULINO, [new RG('01.212.121-2', new Date(2006, 7, 20), 'PR'), new RG('02.323.232-2', new Date(2007, 8, 25), 'BA')], new Date().toISOString(), [new Telefone('41', '0121-2121'), new Telefone('71', '2323-2323')]);
let cliente29 = new Cliente('Larissa Paula', 'Larissa', new CPF('343.434.343-43', new Date(1995, 11, 4)), Genero.FEMININO, [new RG('34.343.434-3', new Date(2013, 9, 15), 'PE'), new RG('35.353.535-3', new Date(2014, 10, 20), 'SC')], new Date().toISOString(), [new Telefone('81', '3434-3434'), new Telefone('48', '3535-3535')]);
let cliente30 = new Cliente('Facu Conte', 'Conte', new CPF('018.453.999-25', new Date(1998, 1, 27)), Genero.MASCULINO, [new RG('01.573.932-0', new Date(2012, 9, 18), 'RS'), new RG('02.993.528-3', new Date(2014, 10, 20), 'SP')], new Date().toISOString(), [new Telefone('11', '9102-5834'), new Telefone('12', '2585-2576')]);

empresa.getClientes.push(cliente1)
empresa.getClientes.push(cliente2)
empresa.getClientes.push(cliente3)
empresa.getClientes.push(cliente4)
empresa.getClientes.push(cliente5)
empresa.getClientes.push(cliente6)
empresa.getClientes.push(cliente7)
empresa.getClientes.push(cliente8)
empresa.getClientes.push(cliente9)
empresa.getClientes.push(cliente10)
empresa.getClientes.push(cliente11)
empresa.getClientes.push(cliente12)
empresa.getClientes.push(cliente13)
empresa.getClientes.push(cliente14)
empresa.getClientes.push(cliente15)
empresa.getClientes.push(cliente16)
empresa.getClientes.push(cliente17)
empresa.getClientes.push(cliente18)
empresa.getClientes.push(cliente19)
empresa.getClientes.push(cliente20)
empresa.getClientes.push(cliente21)
empresa.getClientes.push(cliente22)
empresa.getClientes.push(cliente23)
empresa.getClientes.push(cliente24)
empresa.getClientes.push(cliente25)
empresa.getClientes.push(cliente26)
empresa.getClientes.push(cliente27)
empresa.getClientes.push(cliente28)
empresa.getClientes.push(cliente29)
empresa.getClientes.push(cliente30)

let produto1 = new Produto("Sabonete de Ervas", 12);
let produto2 = new Produto("Shampoo", 15);
let produto3 = new Produto("Condicionador Hidratante", 18);
let produto4 = new Produto("Máscara Capilar Nutritiva", 25);
let produto5 = new Produto("Óleo Corporal Relaxante", 20);
let produto6 = new Produto("Creme Hidratante Facial", 30);
let produto7 = new Produto("Esfoliante Corporal", 22);
let produto8 = new Produto("Mascara de cílios", 18);
let produto9 = new Produto("Sabonete de Limpeza Facial", 15);
let produto10 = new Produto("Máscara Facial Revitalizante", 25);
let produto11 = new Produto("Protetor Solar", 65);
let produto12 = new Produto("Gel Pós-barba", 20);
let produto13 = new Produto("Pomada Modeladora para Cabelo", 18);
let produto14 = new Produto("Gel Fixador para Cabelo", 15);
let produto15 = new Produto("Spray para Cabelo", 20);
let produto16 = new Produto("Creme para Barbear", 18);
let produto17 = new Produto("Loção Pós-barba Hidratante", 15);
let produto18 = new Produto("Óleo para Barba", 22);
let produto19 = new Produto("Adesivo para espinha", 42);
let produto20 = new Produto("Perfume Masculino", 40);

empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)
empresa.getProdutos.push(produto5)
empresa.getProdutos.push(produto6)
empresa.getProdutos.push(produto7)
empresa.getProdutos.push(produto8)
empresa.getProdutos.push(produto9)
empresa.getProdutos.push(produto10)
empresa.getProdutos.push(produto11)
empresa.getProdutos.push(produto12)
empresa.getProdutos.push(produto13)
empresa.getProdutos.push(produto14)
empresa.getProdutos.push(produto15)
empresa.getProdutos.push(produto16)
empresa.getProdutos.push(produto17)
empresa.getProdutos.push(produto18)
empresa.getProdutos.push(produto19)
empresa.getProdutos.push(produto20)

let servico1 = new Servico("Manicure", 30);
let servico2 = new Servico("Pedicure", 55);
let servico3 = new Servico("Design de Sobrancelhas", 25);
let servico4 = new Servico("Corte de Cabelo Feminino", 90);
let servico5 = new Servico("Pintura de Cabelo", 120);
let servico6 = new Servico("Remoção de Rugas", 200);
let servico7 = new Servico("Remoção de Manchas na Pele", 180);
let servico8 = new Servico("Aplicação de Botox", 300);
let servico9 = new Servico("Tratamento para Emagrecimento", 350);
let servico10 = new Servico("Redução de Medidas", 220);
let servico11 = new Servico("Corte de Cabelo Masculino", 60);
let servico12 = new Servico("Corte de Barba", 30);
let servico13 = new Servico("Luzes no cabelo", 85);
let servico14 = new Servico("Tratamento para Queda de Cabelo", 150);

empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)
empresa.getServicos.push(servico5)
empresa.getServicos.push(servico6)
empresa.getServicos.push(servico7)
empresa.getServicos.push(servico8)
empresa.getServicos.push(servico9)
empresa.getServicos.push(servico10)
empresa.getServicos.push(servico11)
empresa.getServicos.push(servico12)
empresa.getServicos.push(servico13)
empresa.getServicos.push(servico14)

/* adicionando produtos para os clientes */
cliente1.addProduto(produto1);
cliente2.addProduto(produto2);
cliente3.addProduto(produto3);
cliente4.addProduto(produto4); 
cliente5.addProduto(produto5);
cliente6.addProduto(produto6); 
cliente7.addProduto(produto3);
cliente8.addProduto(produto6); 
cliente9.addProduto(produto1);
cliente10.addProduto(produto13);
cliente11.addProduto(produto11);
cliente12.addProduto(produto12);
cliente13.addProduto(produto13);
cliente14.addProduto(produto14);
cliente15.addProduto(produto15);
cliente16.addProduto(produto16);
cliente17.addProduto(produto17);
cliente18.addProduto(produto18);
cliente19.addProduto(produto19);
cliente20.addProduto(produto20);
cliente21.addProduto(produto1);
cliente22.addProduto(produto2);
cliente23.addProduto(produto3);

/* adicionando serviços a cliente */
cliente12.addServico(servico2);
cliente13.addServico(servico6);
cliente14.addServico(servico7);
cliente15.addServico(servico8);
cliente16.addServico(servico9);
cliente17.addServico(servico10);
cliente18.addServico(servico6);
cliente19.addServico(servico4);
cliente20.addServico(servico1);
cliente21.addServico(servico2);
cliente22.addServico(servico3);
cliente23.addServico(servico4);
cliente24.addServico(servico5);
cliente25.addServico(servico6);
cliente26.addServico(servico9);
cliente27.addServico(servico10);
cliente28.addServico(servico8);
cliente29.addServico(servico7);
cliente30.addServico(servico10);

let execucao = true

while (execucao) {
    console.log(`\n---------------------------------------------`);
    console.log(`Opções:`);
    console.log(`---------------------------------------------`);
    
    console.log(` 1 - Cadastrar cliente`);
    console.log(` 2 - Listar todos os clientes`);
    console.log(` 3 - Editar cliente`);
    console.log(` 4 - Excluir cliente`);
    console.log(`---------------------------------------------`);
    
    console.log(` 5 - Cadastrar Produto`);
    console.log(` 6 - Listar todos os produtos`);
    console.log(` 7 - Editar produto`);
    console.log(` 8 - Excluir produto`);
    console.log(`---------------------------------------------`);
    
    console.log(` 9 - Cadastrar Serviços`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Editar serviço`);
    console.log(`12 - Excluir serviço`);
    console.log(`---------------------------------------------`);

    console.log(`13 - Comprar produto`);
    console.log(`14 - Comprar serviço`);
    console.log(`15 - Listar pedido de produtos`);
    console.log(`16 - Listar pedido de serviços`);
    console.log(`---------------------------------------------`);

    console.log(`17 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.`);
    console.log(`18 - Listagem de todos os clientes por gênero.`);
    console.log(`19 - Listagem geral dos serviços ou produtos mais consumidos.`);
    console.log(`20 - Listagem dos serviços ou produtos mais consumidos por gênero.`);
    console.log(`21 - Listagem dos 10 clientes que menos consumiram produtos ou serviços.`);
    console.log(`22 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.`);
    console.log(`---------------------------------------------`);

    console.log(` 0 - Sair`);
    console.log(`---------------------------------------------\n`);
    
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let updateCliente = new UpdateCliente(empresa.getClientes)
            updateCliente.update()
            break;
        case 4:
            let deleteCliente = new DeleteCliente(empresa.getClientes)
            deleteCliente.delete()
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 7:
            let updateProduto = new UpdateProduto(empresa.getProdutos)
            updateProduto.update()
            break;
        case 8:
            let deleteProduto = new DeleteProduto(empresa.getProdutos)
            deleteProduto.delete()
            break;
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 11:
            let updateServico = new UpdateServico(empresa.getServicos)
            updateServico.update()
            break;
        case 12:
            let deleteServico = new DeleteServico(empresa.getServicos)
            deleteServico.delete()
            break;

        case 13:
            let compraProduto = new CompraProduto(empresa.getClientes,empresa.getProdutos)
            compraProduto.comprar()
            break;
        case 14:
            let compraServico = new ComprarServico(empresa.getClientes,empresa.getServicos)
            compraServico.comprar()
            break;
        case 15:
            let listarPedidoProduto = new ListaPedidoProduto(empresa.getClientes)
            listarPedidoProduto.listar()
            break;
        case 16:
            let listarPedidoServico = new ListaPedidoServico(empresa.getClientes)
            listarPedidoServico.listar()
            break;

        /* LISTAGEM */
        case 17:
            let listaClienteMCQuantidade= new ListaClienteMCQuantidade(empresa.getClientes)
            listaClienteMCQuantidade.listar()
            break;
        case 18:
            let listaClientesPorGenero = new ListaClientesPorGenero(empresa.getClientes)
            listaClientesPorGenero.listar()
            break;
        case 19:
            let listaGeralServicoProdutoMC = new ListaGeralServicoProdutoMC(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listaGeralServicoProdutoMC.listar()
            break;
        case 20:
            let listaServicoProdutoMCGenero = new ListaServicoProdutoMCGenero(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listaServicoProdutoMCGenero.listar()
            break;
        case 21:
            let listaClienteMenosCProdutoServico = new ListaClienteMenosCProdutoServico(empresa.getClientes)
            listaClienteMenosCProdutoServico.listar()
            break;
        case 22:
            let listaClienteMCValor = new ListaClienteMCValor(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listaClienteMCValor.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
