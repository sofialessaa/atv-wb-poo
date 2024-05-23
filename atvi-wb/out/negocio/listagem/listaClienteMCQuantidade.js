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
var ListaClienteMCQuantidade = /** @class */ (function (_super) {
    __extends(ListaClienteMCQuantidade, _super);
    function ListaClienteMCQuantidade(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListaClienteMCQuantidade.prototype.listar = function () {
        console.log("\nOs 10 clientes que mais consumiram produtos ou servi\u00E7os em quantidade s\u00E3o:");
        // Corrigir a lógica de ordenação
        this.clientes.sort(function (a, b) {
            var totalConsumosA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            var totalConsumosB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return totalConsumosB - totalConsumosA;
        });
        // Listar os 10 clientes com mais consumos
        for (var i = 0; i < Math.min(this.clientes.length, 10); i++) {
            console.log("".concat(i + 1, " - ").concat(this.clientes[i].nome));
        }
    };
    return ListaClienteMCQuantidade;
}(listagem_1.default));
exports.default = ListaClienteMCQuantidade;
