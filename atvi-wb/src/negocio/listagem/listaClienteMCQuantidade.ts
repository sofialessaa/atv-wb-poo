import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaClienteMCQuantidade extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nOs 10 clientes que mais consumiram produtos ou serviços em quantidade são:`);

        // Corrigir a lógica de ordenação
        this.clientes.sort((a, b) => {
            const totalConsumosA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            const totalConsumosB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return totalConsumosB - totalConsumosA;
        });

        // Listar os 10 clientes com mais consumos
        for (let i = 0; i < Math.min(this.clientes.length, 10); i++) {
            console.log(`${i + 1} - ${this.clientes[i].nome}`);
        }
    }
}
