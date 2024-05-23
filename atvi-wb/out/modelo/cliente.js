"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero, rgs, dataCadastro, telefones) {
        this.precoPedido = Number[0];
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = rgs;
        this.dataCadastro = dataCadastro;
        this.telefones = telefones;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getGenero", {
        get: function () {
            return this.genero;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.addProduto = function (produto) {
        this.produtosConsumidos.push(produto);
    };
    Cliente.prototype.addServico = function (servico) {
        this.servicosConsumidos.push(servico);
    };
    return Cliente;
}());
exports.default = Cliente;
