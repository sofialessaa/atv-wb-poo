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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var cadastro_1 = __importDefault(require("../cadastro"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        var dataCadastro = new Date().toLocaleDateString();
        console.log("\nIn\u00EDcio do cadastro do cliente");
        /* nome */
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        /* cpf */
        var valorCPF = this.entrada.receberTexto("Por favor informe o n\u00FAmero do CPF: ");
        var dataCPF = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do CPF, no padr\u00E3o dd/mm/yyyy: ");
        var partesDataCPF = dataCPF.split('/');
        var diaCPF = parseInt(partesDataCPF[0], 10);
        var mesCPF = parseInt(partesDataCPF[1], 10) - 1; // Ajuste no mês
        var anoCPF = parseInt(partesDataCPF[2], 10);
        var dataEmissaoCPF = new Date(anoCPF, mesCPF, diaCPF);
        var cpf = new cpf_1.default(valorCPF, dataEmissaoCPF);
        /* capturar o gênero do cliente */
        var genero = null; // Inicializar como null
        do {
            var generoString = this.entrada.receberTexto("Por favor informe o g\u00EAnero do cliente (F/M/O): ").toUpperCase();
            if (generoString === 'M' || generoString === 'F' || generoString === 'O') {
                genero = generoString; // Convertendo string para Genero
            }
            else {
                console.log('Opção inválida! Por favor, escolha entre M, F ou O.');
            }
        } while (!genero);
        /* RGs */
        var rgs = [];
        while (true) {
            var valorRG = this.entrada.receberTexto("Por favor informe o n\u00FAmero do RG: ");
            var dataRG = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do CPF, no padr\u00E3o dd/mm/yyyy: ");
            var partesDataRG = dataRG.split('/');
            var diaRG = parseInt(partesDataRG[0], 10);
            var mesRG = parseInt(partesDataRG[1], 10) - 1; // Ajuste no mês
            var anoRG = parseInt(partesDataRG[2], 10);
            var dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
            var ufRG = this.entrada.receberTexto("Por favor informe a UF do RG: ");
            var rg = new rg_1.default(valorRG, dataEmissaoRG, ufRG);
            rgs.push(rg);
            var continueInput = this.entrada.receberTexto("Deseja cadastrar outro RG? (s/n): ");
            if (continueInput.toLowerCase() !== 's') {
                break;
            }
        }
        /* telefone */
        var telefones = [];
        while (true) {
            var ddd = this.entrada.receberTexto("Por favor o DDD: ");
            var numero = this.entrada.receberTexto("Por favor informe o n\u00FAmero de telefone: ");
            var telefone = new telefone_1.default(ddd, numero);
            telefones.push(telefone);
            var continueInput = this.entrada.receberTexto("Deseja cadastrar outro n\u00FAmero de telefone? (s/n): ");
            if (continueInput.toLowerCase() !== 's') {
                break;
            }
        }
        /* cadastro do cliente */
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero, rgs, dataCadastro, telefones);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
