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
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var UpdateCliente = /** @class */ (function (_super) {
    __extends(UpdateCliente, _super);
    function UpdateCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateCliente.prototype.update = function () {
        var cpf = this.entrada.receberTexto("Digite o CPF do cliente que deseja alterar: ");
        var updateCliente = this.clientes.find(function (cliente) { return cliente.getCpf.getValor === cpf; });
        if (!updateCliente) {
            console.log("CPF inv\u00E1lido. Por favor, informe um cliente v\u00E1lido.");
            return;
        }
        var opcoesUpdate = "\n        Escolha uma op\u00E7\u00E3o:\n        1 - Alterar nome\n        2 - Alterar nome social\n        3 - Alterar g\u00EAnero\n        4 - Alterar RG\n        5 - Alterar telefone\n        0 - Sair\n        \n";
        var opcao = this.entrada.receberNumero(opcoesUpdate);
        switch (opcao) {
            case 1:
                var nome = this.entrada.receberTexto("Informe o novo nome para ".concat(updateCliente.nome, ": "));
                updateCliente.nome = nome;
                console.log("Nome alterado com sucesso!");
                break;
            case 2:
                var nomeSocial = this.entrada.receberTexto("Informe o novo nome social para ".concat(updateCliente.nomeSocial, ": "));
                updateCliente.nomeSocial = nomeSocial;
                console.log("Nome social alterado com sucesso!");
                break;
            case 3:
                var genero = this.entrada.receberTexto("Informe o novo g\u00EAnero do cliente (F/M/O-Outro): ");
                updateCliente.genero = genero;
                console.log("Gênero alterado com sucesso!");
                break;
            case 4:
                this.updateRg(updateCliente);
                break;
            case 5:
                this.updateTelefone(updateCliente);
                break;
            case 0:
                console.log("\nCliente ".concat(updateCliente.nome, " atualizado com sucesso!\n"));
                break;
            default:
                console.log("Opção inválida!");
        }
    };
    UpdateCliente.prototype.updateRg = function (cliente) {
        var valorRg = this.entrada.receberTexto("Por favor informe o número do RG: ");
        var dataRg = this.entrada.receberTexto("Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ");
        var ufRg = this.entrada.receberTexto("Por favor informe a UF do RG: ");
        var _a = dataRg.split('/').map(Number), dia = _a[0], mes = _a[1], ano = _a[2];
        var dataEmissaoRg = new Date(ano, mes - 1, dia); // mês é zero-indexado em Date
        cliente.getRgs[0] = new rg_1.default(valorRg, dataEmissaoRg, ufRg);
        console.log("RG alterado com sucesso!");
    };
    UpdateCliente.prototype.updateTelefone = function (cliente) {
        var ddd = this.entrada.receberTexto("Por favor informe o DDD: ");
        var numero = this.entrada.receberTexto("Por favor informe o número do telefone: ");
        cliente.getTelefones[0] = new telefone_1.default(ddd, numero);
        console.log("Telefone alterado com sucesso!");
    };
    return UpdateCliente;
}(update_1.default));
exports.default = UpdateCliente;
