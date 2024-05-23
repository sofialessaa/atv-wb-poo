"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var genero_1 = __importDefault(require("../../modelo/genero"));
var ListaServicoProdutoMCGenero = /** @class */ (function (_super) {
    __extends(ListaServicoProdutoMCGenero, _super);
    function ListaServicoProdutoMCGenero(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    ListaServicoProdutoMCGenero.prototype.listar = function () {
        console.log("Listagem de produtos/servi\u00E7os mais consumidos por g\u00EAnero:");
        var topProdutosFeminino = [];
        var topServicosFeminino = [];
        var topProdutosMasculino = [];
        var topServicosMasculino = [];
        var topProdutosOutro = [];
        var topServicosOutro = [];
        this.inicializarContadores(topProdutosFeminino, topServicosFeminino);
        this.inicializarContadores(topProdutosMasculino, topServicosMasculino);
        this.inicializarContadores(topProdutosOutro, topServicosOutro);
        this.contarConsumos(genero_1.default.FEMININO, topProdutosFeminino, topServicosFeminino);
        this.contarConsumos(genero_1.default.MASCULINO, topProdutosMasculino, topServicosMasculino);
        this.contarConsumos(genero_1.default.OUTRO, topProdutosOutro, topServicosOutro);
        this.imprimirTopConsumos("FEMININO", topProdutosFeminino, topServicosFeminino);
        this.imprimirTopConsumos("MASCULINO", topProdutosMasculino, topServicosMasculino);
        this.imprimirTopConsumos("OUTRO", topProdutosOutro, topServicosOutro);
    };
    ListaServicoProdutoMCGenero.prototype.inicializarContadores = function (topProdutos, topServicos) {
        this.produtos.forEach(function (produto) {
            topProdutos.push({ nome: produto.getNomeProduto, valor: produto.getPrecoProduto, quantidade: 0 });
        });
        this.servicos.forEach(function (servico) {
            topServicos.push({ nome: servico.getNomeServico, valor: servico.getPrecoServico, quantidade: 0 });
        });
    };
    ListaServicoProdutoMCGenero.prototype.contarConsumos = function (genero, topProdutos, topServicos) {
        this.clientes.forEach(function (cliente) {
            if (cliente.genero === genero) {
                cliente.getProdutosConsumidos.forEach(function (prodConsumido) {
                    var produto = topProdutos.find(function (p) { return p.nome === prodConsumido.getNomeProduto; });
                    if (produto)
                        produto.quantidade += 1;
                });
                cliente.getServicosConsumidos.forEach(function (servConsumido) {
                    var servico = topServicos.find(function (s) { return s.nome === servConsumido.getNomeServico; });
                    if (servico)
                        servico.quantidade += 1;
                });
            }
        });
        topProdutos.sort(function (a, b) { return b.quantidade - a.quantidade; });
        topServicos.sort(function (a, b) { return b.quantidade - a.quantidade; });
    };
    ListaServicoProdutoMCGenero.prototype.imprimirTopConsumos = function (genero, topProdutos, topServicos) {
        console.log("".concat(genero));
        console.log("PRODUTOS:");
        if (topProdutos.every(function (prod) { return prod.quantidade === 0; })) {
            console.log("1 - nenhum");
        }
        else {
            topProdutos.forEach(function (prod, index) {
                if (prod.quantidade > 0) {
                    console.log("".concat(index + 1, " - ").concat(prod.nome));
                }
            });
        }
        console.log("SERVI\u00C7OS:");
        if (topServicos.every(function (serv) { return serv.quantidade === 0; })) {
            console.log("1 - nenhum");
        }
        else {
            topServicos.forEach(function (serv, index) {
                if (serv.quantidade > 0) {
                    console.log("".concat(index + 1, " - ").concat(serv.nome));
                }
            });
        }
    };
    return ListaServicoProdutoMCGenero;
}(listagem_1.default));
exports.default = ListaServicoProdutoMCGenero;
