import Cliente from "../../modelo/cliente";
import Update from "../update";
import Entrada from "../../io/entrada";
import Genero from "../../modelo/genero";
import Telefone from "../../modelo/telefone";
import RG from "../../modelo/rg";

export default class UpdateCliente extends Update {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public update(): void {
        let cpf = this.entrada.receberTexto(`Digite o CPF do cliente que deseja alterar: `);
        const updateCliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (!updateCliente) {
            console.log(`CPF inválido. Por favor, informe um cliente válido.`);
            return;
        }

        const opcoesUpdate = `
        Escolha uma opção:
        1 - Alterar nome
        2 - Alterar nome social
        3 - Alterar gênero
        4 - Alterar RG
        5 - Alterar telefone
        0 - Sair
        \n`;

        const opcao = this.entrada.receberNumero(opcoesUpdate);

        switch (opcao) {
            case 1:
                let nome = this.entrada.receberTexto(`Informe o novo nome para ${updateCliente.nome}: `);
                updateCliente.nome = nome;
                console.log("Nome alterado com sucesso!");
                break;
            case 2:
                let nomeSocial = this.entrada.receberTexto(`Informe o novo nome social para ${updateCliente.nomeSocial}: `);
                updateCliente.nomeSocial = nomeSocial;
                console.log("Nome social alterado com sucesso!");
                break;
            case 3:
                let genero = this.entrada.receberTexto(`Informe o novo gênero do cliente (F/M/O-Outro): `) as Genero;
                updateCliente.genero = genero;
                console.log("Gênero alterado com sucesso!");
                break;
            case 4:
                this.updateRg(updateCliente);
                break;
            case 5:
                this.updateTelefone(updateCliente);
                break; 
            case 0:
                console.log(`\nCliente ${updateCliente.nome} atualizado com sucesso!\n`);
                break;
            default:
                console.log("Opção inválida!");
        }
    }

    private updateRg(cliente: Cliente): void {
        const valorRg = this.entrada.receberTexto("Por favor informe o número do RG: ");
        const dataRg = this.entrada.receberTexto("Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ");
        const ufRg = this.entrada.receberTexto("Por favor informe a UF do RG: "); 
        const [dia, mes, ano] = dataRg.split('/').map(Number);
        const dataEmissaoRg = new Date(ano, mes - 1, dia); // mês é zero-indexado em Date
        cliente.getRgs[0] = new RG(valorRg, dataEmissaoRg, ufRg); 
        console.log("RG alterado com sucesso!");
    }    

    private updateTelefone(cliente: Cliente): void {
        const ddd = this.entrada.receberTexto("Por favor informe o DDD: ");
        const numero = this.entrada.receberTexto("Por favor informe o número do telefone: ");
        cliente.getTelefones[0] = new Telefone(ddd, numero);
        console.log("Telefone alterado com sucesso!");
    }  
}