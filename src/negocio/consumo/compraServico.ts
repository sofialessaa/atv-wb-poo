import Servico from "../../modelo/servico";
import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";
import Compra from "../compra";

export default class ComprarServico extends Compra {
    private clientes: Array<Cliente>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super();
        this.clientes = clientes;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public comprar(): void {
        const cpf = this.entrada.receberTexto(`Por favor informe o CPF de quem irá realizar a compra: `);
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (!cliente) {
            console.log(`Cliente não encontrado. Por favor, insira um CPF válido.`);
            return;
        }

        let operacao = true;
        while (operacao) {
            console.log(`--------------------------------------`);
            console.log(`Opções: `);
            console.log(`1 - Pedido de serviço`);
            console.log(`0 - Sair`);
            const opcao = this.entrada.receberNumero(`Escolha abaixo o que você quer fazer: `);

            switch (opcao) {
                case 1:
                    this.servicos.forEach((servico, index) => {
                        console.log(`${index} - ${servico.getNomeServico}`);
                    });
                    const servicoIndex = this.entrada.receberNumero(`Insira o número do serviço desejado: `);
                    const servicoSelecionado = this.servicos[servicoIndex];

                    if (servicoSelecionado) {
                        cliente.getServicosConsumidos.push(servicoSelecionado);
                        console.log(`Serviço adicionado com sucesso!`);
                    } else {
                        console.log(`Serviço inválido. Por favor, insira um número de serviço válido.`);
                    }
                    break;
                case 0:
                    operacao = false;
                    console.log(`Sair`);
                    break;
                default:
                    console.log(`Opção inválida. Por favor, escolha uma opção válida.`);
            }
        }
    }
}