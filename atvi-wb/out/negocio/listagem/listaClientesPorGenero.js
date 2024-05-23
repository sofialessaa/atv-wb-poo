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
var ListaClientesPorGenero = /** @class */ (function (_super) {
    __extends(ListaClientesPorGenero, _super);
    function ListaClientesPorGenero(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListaClientesPorGenero.prototype.listar = function () {
        var mulheres = this.clientes.filter(function (cliente) { return cliente.genero === genero_1.default.FEMININO; });
        var homens = this.clientes.filter(function (cliente) { return cliente.genero === genero_1.default.MASCULINO; });
        var outros = this.clientes.filter(function (cliente) { return cliente.genero === genero_1.default.OUTRO; });
        console.log("\nLista dos clientes do sexo feminino:");
        mulheres.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome + " e CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\nLista dos clientes do sexo masculino:");
        homens.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome + " e CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\nLista dos clientes de outro g\u00EAnero:");
        outros.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome + " e CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListaClientesPorGenero;
}(listagem_1.default));
exports.default = ListaClientesPorGenero;
