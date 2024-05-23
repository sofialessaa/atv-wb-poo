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
var update_1 = __importDefault(require("../update"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var UpdateProduto = /** @class */ (function (_super) {
    __extends(UpdateProduto, _super);
    function UpdateProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateProduto.prototype.update = function () {
        var nome = this.entrada.receberTexto("Digite o nome do produto que deseja alterar: ");
        var updateProduto = this.produtos.find(function (produto) { return produto.getNomeProduto === nome; });
        if (!updateProduto) {
            console.log("Produto inv\u00E1lido. Por favor, informe um produto v\u00E1lido.");
            return;
        }
        var opcoesUpdate = "\n        Escolha uma op\u00E7\u00E3o:\n        1 - Alterar nome\n        2 - Alterar pre\u00E7o\n        0 - Sair\n        \n";
        var opcao = this.entrada.receberNumero(opcoesUpdate);
        switch (opcao) {
            case 1:
                var nomeProduto = this.entrada.receberTexto("Informe o novo nome para ".concat(updateProduto.nomeProduto, ": "));
                updateProduto.nomeProduto = nomeProduto;
                console.log("Nome alterado com sucesso!");
                break;
            case 2:
                var precoProduto = this.entrada.receberNumero("Informe o novo pre\u00E7o para ".concat(updateProduto.nomeProduto, ": "));
                updateProduto.precoProduto = precoProduto;
                console.log("Preço alterado com sucesso!");
                break;
            case 0:
                console.log("\nProduto ".concat(nome, " atualizado com sucesso!\n"));
                break;
            default:
                console.log("Opção inválida!");
        }
    };
    return UpdateProduto;
}(update_1.default));
exports.default = UpdateProduto;
