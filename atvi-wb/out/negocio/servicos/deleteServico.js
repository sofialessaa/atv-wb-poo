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
var DeleteServico = /** @class */ (function (_super) {
    __extends(DeleteServico, _super);
    function DeleteServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeleteServico.prototype.delete = function () {
        var nomeServico = this.entrada.receberTexto("Digite o nome do servi\u00E7o que deseja exluir: ");
        var indice = this.servicos.findIndex(function (produto) { return produto.getNomeServico === nomeServico; });
        if (indice !== -1) {
            this.servicos.splice(indice, 1);
            console.log("\nServi\u00E7o: ".concat(nomeServico, ", exclu\u00EDdo com sucesso!\n"));
        }
        else {
            console.log("Servi\u00E7o: ".concat(nomeServico, " inv\u00E1lido. Por favor, selecione um servi\u00E7o v\u00E1lido."));
        }
    };
    return DeleteServico;
}(delete_1.default));
exports.default = DeleteServico;
