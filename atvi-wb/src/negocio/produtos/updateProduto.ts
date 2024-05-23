import Produto from "../../modelo/produto";
import Update from "../update";
import Entrada from "../../io/entrada";

export default class UpdateProduto extends Update {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public update(): void {
        let nome = this.entrada.receberTexto(`Digite o nome do produto que deseja alterar: `);
        const updateProduto = this.produtos.find(produto => produto.getNomeProduto === nome);

        if(!updateProduto) {
            console.log(`Produto inválido. Por favor, informe um produto válido.`);
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
                let nomeProduto = this.entrada.receberTexto(`Informe o novo nome para ${updateProduto.nomeProduto}: `);
                updateProduto.nomeProduto = nomeProduto;
                console.log("Nome alterado com sucesso!");
                break;
            case 2:
                let precoProduto = this.entrada.receberNumero(`Informe o novo preço para ${updateProduto.nomeProduto}: `);
                updateProduto.precoProduto = precoProduto;
                console.log("Preço alterado com sucesso!");
                break;
            case 0:
                console.log(`\nProduto ${nome} atualizado com sucesso!\n`);
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}