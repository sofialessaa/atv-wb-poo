import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInicio do cadastro de um novo serviço`)
        let nomeServico = this.entrada.receberTexto(`Digite o nome do novo serviço:`)
        let precoServico = this.entrada.receberNumero(`Digite o preço do novo serviço: `)
        let servico = new Servico(nomeServico, precoServico)
        this.servicos.push(servico)
    }
}