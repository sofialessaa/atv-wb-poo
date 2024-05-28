import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";
import Compra from "../compra";

export default class CompraProduto extends Compra {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }   

    public comprar(): void {
        const cpf = this.entrada.receberTexto(`Por favor digite o CPF de quem irá realizar a compra: `);
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    
        if (!cliente) {
            console.log("Cliente não encontrado. Por favor, insira um CPF válido.");
            return;
        }
    
        let operacao = true;
        while (operacao) {
            console.log(`Escolha uma opção: `);
            console.log(`1 - Pedido de Produto`);
            console.log(`0 - Sair`);
            const opcao = this.entrada.receberNumero(`Escolha abaixo o que você deseja realizar: `);
    
            switch (opcao) {
                case 1:
                    this.produtos.forEach((produto, index) => {
                        console.log(`${index} - ${produto.getNomeProduto}`);
                    });
                    const produtoIndex = this.entrada.receberNumero(`Insira o número do produto desejado: `);
                    const produtoSelecionado = this.produtos[produtoIndex];
    
                    if (produtoSelecionado) {
                        cliente.getProdutosConsumidos.push(produtoSelecionado);
                        console.log(`Produto adicionado com sucesso!`);
                    } else {
                        console.log(`Produto inválido. Por favor, insira um número de produto válido.`);
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