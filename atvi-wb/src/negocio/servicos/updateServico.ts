import Servico from "../../modelo/servico";
import Update from "../update";
import Entrada from "../../io/entrada";

export default class UpdateServico extends Update {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public update(): void {
        let nome = this.entrada.receberTexto(`Digite o nome do serviço que deseja alterar: `);
        const updateServico = this.servicos.find(servico => servico.getNomeServico === nome);

        if(!updateServico) {
            console.log(`Serviço inválido. Por favor, informe um produto válido.`);
            return;
        }

        const opcoesUpdate = `
        Escolha uma opção:
        1 - Alterar nome
        2 - Alterar preço
        0 - Sair
        \n`;

        const opcao = this.entrada.receberNumero(opcoesUpdate);

        switch (opcao) {
            case 1:
                let nomeServico = this.entrada.receberTexto(`Informe o novo nome para ${updateServico.nomeServico}: `);
                updateServico.nomeServico = nomeServico;
                console.log("Nome alterado com sucesso!");
                break;
            case 2:
                let precoServico = this.entrada.receberNumero(`Informe o novo preço para ${updateServico.nomeServico}: `);
                updateServico.precoServico = precoServico;
                console.log("Preço alterado com sucesso!");
                break;
            case 0:
                console.log(`\nServiço ${nome} atualizado com sucesso!\n`);
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}