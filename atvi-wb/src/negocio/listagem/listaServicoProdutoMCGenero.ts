import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";
import Genero from "../../modelo/genero";

export default class ListaServicoProdutoMCGenero extends Listagem {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public listar(): void {
        console.log(`Listagem de produtos/serviços mais consumidos por gênero:`);

        const topProdutosFeminino: { nome: string, valor: number, quantidade: number }[] = [];
        const topServicosFeminino: { nome: string, valor: number, quantidade: number }[] = [];

        const topProdutosMasculino: { nome: string, valor: number, quantidade: number }[] = [];
        const topServicosMasculino: { nome: string, valor: number, quantidade: number }[] = [];

        const topProdutosOutro: { nome: string, valor: number, quantidade: number }[] = [];
        const topServicosOutro: { nome: string, valor: number, quantidade: number }[] = [];

        this.inicializarContadores(topProdutosFeminino, topServicosFeminino);
        this.inicializarContadores(topProdutosMasculino, topServicosMasculino);
        this.inicializarContadores(topProdutosOutro, topServicosOutro);

        this.contarConsumos(Genero.FEMININO, topProdutosFeminino, topServicosFeminino);
        this.contarConsumos(Genero.MASCULINO, topProdutosMasculino, topServicosMasculino);
        this.contarConsumos(Genero.OUTRO, topProdutosOutro, topServicosOutro);

        this.imprimirTopConsumos(`FEMININO`, topProdutosFeminino, topServicosFeminino);
        this.imprimirTopConsumos(`MASCULINO`, topProdutosMasculino, topServicosMasculino);
        this.imprimirTopConsumos(`OUTRO`, topProdutosOutro, topServicosOutro);
    }

    private inicializarContadores(
        topProdutos: { nome: string, valor: number, quantidade: number }[],
        topServicos: { nome: string, valor: number, quantidade: number }[]
    ): void {
        this.produtos.forEach(produto => {
            topProdutos.push({ nome: produto.getNomeProduto, valor: produto.getPrecoProduto, quantidade: 0 });
        });

        this.servicos.forEach(servico => {
            topServicos.push({ nome: servico.getNomeServico, valor: servico.getPrecoServico, quantidade: 0 });
        });
    }

    private contarConsumos(
        genero: Genero,
        topProdutos: { nome: string, valor: number, quantidade: number }[],
        topServicos: { nome: string, valor: number, quantidade: number }[]
    ): void {
        this.clientes.forEach(cliente => {
            if (cliente.genero === genero) {
                cliente.getProdutosConsumidos.forEach(prodConsumido => {
                    const produto = topProdutos.find(p => p.nome === prodConsumido.getNomeProduto);
                    if (produto) produto.quantidade += 1;
                });

                cliente.getServicosConsumidos.forEach(servConsumido => {
                    const servico = topServicos.find(s => s.nome === servConsumido.getNomeServico);
                    if (servico) servico.quantidade += 1;
                });
            }
        });

        topProdutos.sort((a, b) => b.quantidade - a.quantidade);
        topServicos.sort((a, b) => b.quantidade - a.quantidade);
    }

    private imprimirTopConsumos(
        genero: string,
        topProdutos: { nome: string, valor: number, quantidade: number }[],
        topServicos: { nome: string, valor: number, quantidade: number }[]
    ): void {
        console.log(`${genero}`);
        console.log(`PRODUTOS:`);
        if (topProdutos.every(prod => prod.quantidade === 0)) {
            console.log(`1 - nenhum`);
        } else {
            topProdutos.forEach((prod, index) => {
                if (prod.quantidade > 0) {
                    console.log(`${index + 1} - ${prod.nome}`);
                }
            });
        }

        console.log(`SERVIÇOS:`);
        if (topServicos.every(serv => serv.quantidade === 0)) {
            console.log(`1 - nenhum`);
        } else {
            topServicos.forEach((serv, index) => {
                if (serv.quantidade > 0) {
                    console.log(`${index + 1} - ${serv.nome}`);
                }
            });
        }
    }
}
