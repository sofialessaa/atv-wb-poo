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
var delete_1 = __importDefault(require("../delete"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var DeleteProduto = /** @class */ (function (_super) {
    __extends(DeleteProduto, _super);
    function DeleteProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeleteProduto.prototype.delete = function () {
        var nomeProduto = this.entrada.receberTexto("Digite o nome do produto que deseja exluir: ");
        var indice = this.produtos.findIndex(function (produto) { return produto.getNomeProduto === nomeProduto; });
        if (indice !== -1) {
            this.produtos.splice(indice, 1);
            console.log("\nProduto: ".concat(nomeProduto, ", exclu\u00EDdo com sucesso!\n"));
        }
        else {
            console.log("Produto: ".concat(nomeProduto, " inv\u00E1lido. Por favor, selecione um produto v\u00E1lido."));
        }
    };
    return DeleteProduto;
}(delete_1.default));
exports.default = DeleteProduto;
