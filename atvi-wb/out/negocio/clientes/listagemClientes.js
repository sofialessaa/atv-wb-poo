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
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("--------------------------------------");
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("G\u00EAnero: " + cliente.getGenero);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Data de emiss\u00E3o do CPF: " + cliente.getCpf.getDataEmissao.toLocaleDateString('pt-BR'));
            console.log("RG(s): ".concat(cliente.getRgs.map(function (rg) { return "".concat(rg.getValor, " - ").concat(rg.getUF); }).join(", ")));
            console.log("Data de emiss\u00E3o do RG: ".concat(cliente.getRgs.map(function (rg) { return rg.getDataEmissao.toLocaleDateString('pt-BR'); }).join(", ")));
            console.log("Telefone(s): ".concat(cliente.getTelefones.map(function (telefone) { return "(".concat(telefone.getDdd, ") ").concat(telefone.getNumero); }).join(", ")));
            console.log("Produtos adquiridos: ".concat(cliente.getProdutosConsumidos.length > 0 ? cliente.getProdutosConsumidos.map(function (produto) { return produto.nomeProduto; }).join(", ") : "Nenhum"));
            console.log("Servi\u00E7os adquiridos: ".concat(cliente.getServicosConsumidos.length > 0 ? cliente.getServicosConsumidos.map(function (servico) { return servico.nomeServico; }).join(", ") : "Nenhum"));
        });
        console.log("--------------------------------------");
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
