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
        1 - Editar nome
        2 - Editar nome social
        3 - Editar gênero
        4 - Editar RG(s)
        5 - Editar telefone(s)
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
                const rgs = updateCliente.getRgs;
                console.log("RGs cadastrados:");
                rgs.forEach((rg, index) => {
                    console.log(`${index + 1}: ${rg.getValor}, Emitido em: ${rg.getDataEmissao.toLocaleDateString()}, UF: ${rg.getUF}`);
                });
                const escolhaRg = this.entrada.receberNumero("Por favor selecione o RG que deseja editar: ");
                if (escolhaRg > 0 && escolhaRg <= rgs.length) {
                    const valorRg = this.entrada.receberTexto("Por favor informe o novo número do RG: ");
                    const dataRg = this.entrada.receberTexto("Por favor informe a nova data de emissão do RG, no padrão dd/mm/yyyy: ");
                    const ufRg = this.entrada.receberTexto("Por favor informe a nova UF do RG: ");
                    const [dia, mes, ano] = dataRg.split('/').map(Number);
                    const dataEmissaoRg = new Date(ano, mes - 1, dia);
                    rgs[escolhaRg - 1] = new RG(valorRg, dataEmissaoRg, ufRg);
                    console.log("RG alterado com sucesso!");
                } else {
                    console.log("Escolha inválida.");
                }
                break;
            case 5:
                const telefones = updateCliente.getTelefones;
                console.log("Telefones cadastrados:");
                telefones.forEach((telefone, index) => {
                    console.log(`${index + 1}: (${telefone.getDdd}) ${telefone.getNumero}`);
                });
                const escolha = this.entrada.receberNumero("Selecione o número que deseja editar: ");
                if (escolha > 0 && escolha <= telefones.length) {
                    const ddd = this.entrada.receberTexto("Por favor informe o novo DDD: ");
                    const numero = this.entrada.receberTexto("Por favor informe o novo número do telefone: ");
                    telefones[escolha - 1] = new Telefone(ddd, numero);
                    console.log("Telefone alterado com sucesso!");
                } else {
                    console.log("Escolha inválida.");
                }
                break;
            case 0:
                console.log(`\nCliente ${updateCliente.nome} atualizado com sucesso!\n`);
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}