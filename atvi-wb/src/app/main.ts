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

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let execucao = true

while (execucao) {
    console.log(`\n---------------------------------------------`);
    console.log(`Opções:`);
    console.log(`---------------------------------------------\n`);
    
    console.log(`CLIENTES`);
    console.log(` 1 - Cadastrar cliente`);
    console.log(` 2 - Listar todos os clientes`);
    console.log(` 3 - Editar cliente`);
    console.log(` 4 - Excluir cliente`);
    console.log(`---------------------------------------------\n`);
    
    console.log(`PRODUTOS`);
    console.log(` 5 - Cadastrar Produto`);
    console.log(` 6 - Listar todos os produtos`);
    console.log(` 7 - Editar produto`);
    console.log(` 8 - Excluir produto`);
    console.log(`---------------------------------------------\n`);
    
    console.log(`SERVIÇOS`);
    console.log(` 9 - Cadastrar Serviços`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Editar serviço`);
    console.log(`12 - Excluir serviço`);
    console.log(`---------------------------------------------\n`);

    console.log(`CONSUMO`);
    console.log(`13 - Comprar produto`);
    console.log(`14 - Comprar serviço`);
    console.log(`15 - Listar pedido de produtos`);
    console.log(`16 - Listar pedido de serviços`);
    console.log(`---------------------------------------------\n`);

    console.log(`LISTAGEM`);
    console.log(`17 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor`);
    console.log(`18 - Listagem de todos os clientes por gênero`);
    console.log(`19 - Listagem geral dos serviços ou produtos mais consumidos`);
    console.log(`20 - Listagem dos serviços ou produtos mais consumidos por gênero`);
    console.log(`21 - Listagem dos 10 clientes que menos consumiram produtos ou serviços`);
    console.log(`22 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade`);
    console.log(`---------------------------------------------\n`);

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