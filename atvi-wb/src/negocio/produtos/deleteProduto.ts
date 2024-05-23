import Produto from "../../modelo/produto";
import Delete from "../delete";
import Entrada from "../../io/entrada";

export default class DeleteProduto extends Delete{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public delete(): void {
        let nomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja exluir: `);
        const indice = this.produtos.findIndex(produto => produto.getNomeProduto === nomeProduto);
        if(indice !== -1) {
            this.produtos.splice(indice, 1);
            console.log(`\nProduto: ${nomeProduto}, excluído com sucesso!\n`);
        } else {
            console.log(`Produto: ${nomeProduto} inválido. Por favor, selecione um produto válido.`);
        }
    }
} 