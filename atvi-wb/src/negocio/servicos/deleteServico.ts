import Servico from "../../modelo/servico";
import Delete from "../delete";
import Entrada from "../../io/entrada";

export default class DeleteServico extends Delete{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public delete(): void {
        let nomeServico = this.entrada.receberTexto(`Digite o nome do serviço que deseja exluir: `);
        const indice = this.servicos.findIndex(produto => produto.getNomeServico === nomeServico);
        if(indice !== -1) {
            this.servicos.splice(indice, 1);
            console.log(`\nServiço: ${nomeServico}, excluído com sucesso!\n`);
        } else {
            console.log(`Serviço: ${nomeServico} inválido. Por favor, selecione um serviço válido.`);
        }
    }
} 