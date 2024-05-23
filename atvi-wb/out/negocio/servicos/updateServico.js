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
var UpdateServico = /** @class */ (function (_super) {
    __extends(UpdateServico, _super);
    function UpdateServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateServico.prototype.update = function () {
        var nome = this.entrada.receberTexto("Digite o nome do servi\u00E7o que deseja alterar: ");
        var updateServico = this.servicos.find(function (servico) { return servico.getNomeServico === nome; });
        if (!updateServico) {
            console.log("Servi\u00E7o inv\u00E1lido. Por favor, informe um produto v\u00E1lido.");
            return;
        }
        var opcoesUpdate = "\n        Escolha uma op\u00E7\u00E3o:\n        1 - Alterar nome\n        2 - Alterar pre\u00E7o\n        0 - Sair\n        \n";
        var opcao = this.entrada.receberNumero(opcoesUpdate);
        switch (opcao) {
            case 1:
                var nomeServico = this.entrada.receberTexto("Informe o novo nome para ".concat(updateServico.nomeServico, ": "));
                updateServico.nomeServico = nomeServico;
                console.log("Nome alterado com sucesso!");
                break;
            case 2:
                var precoServico = this.entrada.receberNumero("Informe o novo pre\u00E7o para ".concat(updateServico.nomeServico, ": "));
                updateServico.precoServico = precoServico;
                console.log("Preço alterado com sucesso!");
                break;
            case 0:
                console.log("\nServi\u00E7o ".concat(nome, " atualizado com sucesso!\n"));
                break;
            default:
                console.log("Opção inválida!");
        }
    };
    return UpdateServico;
}(update_1.default));
exports.default = UpdateServico;
