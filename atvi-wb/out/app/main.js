"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cadastroCliente_1 = __importDefault(require("../negocio/clientes/cadastroCliente"));
var cadastroProduto_1 = __importDefault(require("../negocio/produtos/cadastroProduto"));
var cadastroServico_1 = __importDefault(require("../negocio/servicos/cadastroServico"));
var listagemClientes_1 = __importDefault(require("../negocio/clientes/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../negocio/produtos/listagemProdutos"));
var listagemServico_1 = __importDefault(require("../negocio/servicos/listagemServico"));
var updateCliente_1 = __importDefault(require("../negocio/clientes/updateCliente"));
var updateProduto_1 = __importDefault(require("../negocio/produtos/updateProduto"));
var updateServico_1 = __importDefault(require("../negocio/servicos/updateServico"));
var deleteCliente_1 = __importDefault(require("../negocio/clientes/deleteCliente"));
var deleteProduto_1 = __importDefault(require("../negocio/produtos/deleteProduto"));
var deleteServico_1 = __importDefault(require("../negocio/servicos/deleteServico"));
var compraProduto_1 = __importDefault(require("../negocio/consumo/compraProduto"));
var compraServico_1 = __importDefault(require("../negocio/consumo/compraServico"));
var listaClienteMCQuantidade_1 = __importDefault(require("../negocio/listagem/listaClienteMCQuantidade"));
var listaClientesPorGenero_1 = __importDefault(require("../negocio/listagem/listaClientesPorGenero"));
var listaGeralServicoProdutoMC_1 = __importDefault(require("../negocio/listagem/listaGeralServicoProdutoMC"));
var listaServicoProdutoMCGenero_1 = __importDefault(require("../negocio/listagem/listaServicoProdutoMCGenero"));
var listaClienteMenosCProdutoServico_1 = __importDefault(require("../negocio/listagem/listaClienteMenosCProdutoServico"));
var listaClienteMCValor_1 = __importDefault(require("../negocio/listagem/listaClienteMCValor"));
var listadePedidoProduto_1 = __importDefault(require("../negocio/consumo/listadePedidoProduto"));
var listadePedidoServico_1 = __importDefault(require("../negocio/consumo/listadePedidoServico"));
var empresa = new empresa_1.default();
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var execucao = true;
while (execucao) {
    console.log("\n---------------------------------------------");
    console.log("Op\u00E7\u00F5es:");
    console.log("---------------------------------------------\n");
    console.log("CLIENTES");
    console.log(" 1 - Cadastrar cliente");
    console.log(" 2 - Listar todos os clientes");
    console.log(" 3 - Editar cliente");
    console.log(" 4 - Excluir cliente");
    console.log("---------------------------------------------\n");
    console.log("PRODUTOS");
    console.log(" 5 - Cadastrar Produto");
    console.log(" 6 - Listar todos os produtos");
    console.log(" 7 - Editar produto");
    console.log(" 8 - Excluir produto");
    console.log("---------------------------------------------\n");
    console.log("SERVI\u00C7OS");
    console.log(" 9 - Cadastrar Servi\u00E7os");
    console.log("10 - Listar todos os servi\u00E7os");
    console.log("11 - Editar servi\u00E7o");
    console.log("12 - Excluir servi\u00E7o");
    console.log("---------------------------------------------\n");
    console.log("CONSUMO");
    console.log("13 - Comprar produto");
    console.log("14 - Comprar servi\u00E7o");
    console.log("15 - Listar pedido de produtos");
    console.log("16 - Listar pedido de servi\u00E7os");
    console.log("---------------------------------------------\n");
    console.log("LISTAGEM");
    console.log("17 - Listagem dos 10 clientes que mais consumiram produtos ou servi\u00E7os, em quantidade, n\u00E3o em valor");
    console.log("18 - Listagem de todos os clientes por g\u00EAnero");
    console.log("19 - Listagem geral dos servi\u00E7os ou produtos mais consumidos");
    console.log("20 - Listagem dos servi\u00E7os ou produtos mais consumidos por g\u00EAnero");
    console.log("21 - Listagem dos 10 clientes que menos consumiram produtos ou servi\u00E7os");
    console.log("22 - Listagem dos 5 clientes que mais consumiram em valor, n\u00E3o em quantidade");
    console.log("---------------------------------------------\n");
    console.log(" 0 - Sair");
    console.log("---------------------------------------------\n");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var updateCliente = new updateCliente_1.default(empresa.getClientes);
            updateCliente.update();
            break;
        case 4:
            var deleteCliente = new deleteCliente_1.default(empresa.getClientes);
            deleteCliente.delete();
            break;
        case 5:
            var cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 6:
            var listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 7:
            var updateProduto = new updateProduto_1.default(empresa.getProdutos);
            updateProduto.update();
            break;
        case 8:
            var deleteProduto = new deleteProduto_1.default(empresa.getProdutos);
            deleteProduto.delete();
            break;
        case 9:
            var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 10:
            var listagemServicos = new listagemServico_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 11:
            var updateServico = new updateServico_1.default(empresa.getServicos);
            updateServico.update();
            break;
        case 12:
            var deleteServico = new deleteServico_1.default(empresa.getServicos);
            deleteServico.delete();
            break;
        case 13:
            var compraProduto = new compraProduto_1.default(empresa.getClientes, empresa.getProdutos);
            compraProduto.comprar();
            break;
        case 14:
            var compraServico = new compraServico_1.default(empresa.getClientes, empresa.getServicos);
            compraServico.comprar();
            break;
        case 15:
            var listarPedidoProduto = new listadePedidoProduto_1.default(empresa.getClientes);
            listarPedidoProduto.listar();
            break;
        case 16:
            var listarPedidoServico = new listadePedidoServico_1.default(empresa.getClientes);
            listarPedidoServico.listar();
            break;
        /* LISTAGEM */
        case 17:
            var listaClienteMCQuantidade = new listaClienteMCQuantidade_1.default(empresa.getClientes);
            listaClienteMCQuantidade.listar();
            break;
        case 18:
            var listaClientesPorGenero = new listaClientesPorGenero_1.default(empresa.getClientes);
            listaClientesPorGenero.listar();
            break;
        case 19:
            var listaGeralServicoProdutoMC = new listaGeralServicoProdutoMC_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listaGeralServicoProdutoMC.listar();
            break;
        case 20:
            var listaServicoProdutoMCGenero = new listaServicoProdutoMCGenero_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listaServicoProdutoMCGenero.listar();
            break;
        case 21:
            var listaClienteMenosCProdutoServico = new listaClienteMenosCProdutoServico_1.default(empresa.getClientes);
            listaClienteMenosCProdutoServico.listar();
            break;
        case 22:
            var listaClienteMCValor = new listaClienteMCValor_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listaClienteMCValor.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
