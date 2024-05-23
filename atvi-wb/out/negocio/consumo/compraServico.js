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
var entrada_1 = __importDefault(require("../../io/entrada"));
var compra_1 = __importDefault(require("../compra"));
var ComprarServico = /** @class */ (function (_super) {
    __extends(ComprarServico, _super);
    function ComprarServico(clientes, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ComprarServico.prototype.comprar = function () {
        var cpf = this.entrada.receberTexto("Por favor informe o CPF de quem ir\u00E1 realizar a compra: ");
        var cliente = this.clientes.find(function (cliente) { return cliente.getCpf.getValor === cpf; });
        if (!cliente) {
            console.log("Cliente n\u00E3o encontrado. Por favor, insira um CPF v\u00E1lido.");
            return;
        }
        var operacao = true;
        while (operacao) {
            console.log("--------------------------------------");
            console.log("Op\u00E7\u00F5es: ");
            console.log("1 - Pedido de servi\u00E7o");
            console.log("0 - Sair");
            var opcao = this.entrada.receberNumero("Escolha abaixo o que voc\u00EA quer fazer: ");
            switch (opcao) {
                case 1:
                    this.servicos.forEach(function (servico, index) {
                        console.log("".concat(index, " - ").concat(servico.getNomeServico));
                    });
                    var servicoIndex = this.entrada.receberNumero("Insira o n\u00FAmero do servi\u00E7o desejado: ");
                    var servicoSelecionado = this.servicos[servicoIndex];
                    if (servicoSelecionado) {
                        cliente.getServicosConsumidos.push(servicoSelecionado);
                        console.log("Servi\u00E7o adicionado com sucesso!");
                    }
                    else {
                        console.log("Servi\u00E7o inv\u00E1lido. Por favor, insira um n\u00FAmero de servi\u00E7o v\u00E1lido.");
                    }
                    break;
                case 0:
                    operacao = false;
                    console.log("Sair");
                    break;
                default:
                    console.log("Op\u00E7\u00E3o inv\u00E1lida. Por favor, escolha uma op\u00E7\u00E3o v\u00E1lida.");
            }
        }
    };
    return ComprarServico;
}(compra_1.default));
exports.default = ComprarServico;
