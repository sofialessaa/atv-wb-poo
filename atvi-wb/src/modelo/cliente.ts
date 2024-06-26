import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"
import Genero from "./genero" 
import produto from "./produto"
import servico from "./servico"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: string
    public telefones: Array<Telefone>
    public produtosConsumidos: Array<Produto>
    public servicosConsumidos: Array<Servico>
    public genero: Genero 
    public precoPedido: number = Number[0]

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: Genero, rgs: Array<RG>, dataCadastro: string, telefones: Array<Telefone>) { 
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero 
        this.rgs = rgs
        this.dataCadastro = dataCadastro
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): string {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getGenero(): Genero { 
        return this.genero
    }
    public addProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto);
    }

    public addServico(servico: Servico): void {
        this.servicosConsumidos.push(servico);
    }
}