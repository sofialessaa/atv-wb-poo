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
var entrada_1 = __importDefault(require("../io/entrada"));
var produto_1 = __importDefault(require("../modelo/produto"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nInicio do cadastro de um novo produto");
        var nomeProduto = this.entrada.receberTexto("Digite o nome do novo produto:");
        var produto = new produto_1.default();
        produto.nome = nomeProduto;
        this.produtos.push(produto);
    };
    return CadastroProduto;
}(cadastro_1.default));
exports.default = CadastroProduto;
