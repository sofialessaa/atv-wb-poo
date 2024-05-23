"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RG = /** @class */ (function () {
    function RG(valor, dataEmissao, uf) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
        this.uf = uf;
    }
    Object.defineProperty(RG.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RG.prototype, "getDataEmissao", {
        get: function () {
            return this.dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RG.prototype, "getUF", {
        get: function () {
            return this.uf;
        },
        enumerable: false,
        configurable: true
    });
    return RG;
}());
exports.default = RG;
