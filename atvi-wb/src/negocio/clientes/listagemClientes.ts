import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: ` + cliente.getGenero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Data de emissão do CPF: ` + cliente.getCpf.getDataEmissao.toLocaleDateString('pt-BR'));
            console.log(`RG(s): ${cliente.getRgs.map((rg) => `${rg.getValor} - ${rg.getUF}`).join(", ")}`);
            console.log(`Data de emissão do RG: ${cliente.getRgs.map((rg) => rg.getDataEmissao.toLocaleDateString('pt-BR')).join(", ")}`);
            console.log(`Telefone(s): ${cliente.getTelefones.map((telefone) => `(${telefone.getDdd}) ${telefone.getNumero}`).join(", ")}`);
            console.log(`Produtos adquiridos: ${cliente.getProdutosConsumidos.length > 0? cliente.getProdutosConsumidos.map((produto) => produto.nomeProduto).join(", "): "Nenhum"}`);
            console.log(`Serviços adquiridos: ${cliente.getServicosConsumidos.length > 0? cliente.getServicosConsumidos.map((servico) => servico.nomeServico).join(", "): "Nenhum"}`);
        });
        console.log(`--------------------------------------`);
        console.log(`\n`);
    }
}