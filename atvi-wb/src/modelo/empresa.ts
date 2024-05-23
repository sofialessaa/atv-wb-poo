import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(): Array<Cliente> {
        return this.clientes;
    }

    public get getProdutos(): Array<Produto> {
        return this.produtos;
    }

    public get getServicos(): Array<Servico> {
        return this.servicos;
    }
    public addCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    public addProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    public addServico(servico: Servico): void {
        this.servicos.push(servico);
    }
}