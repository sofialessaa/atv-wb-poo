import Cliente from "../../modelo/cliente";
import Delete from "../delete";
import Entrada from "../../io/entrada";

export default class DeleteCliente extends Delete{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public delete(): void {
        let cpf = this.entrada.receberTexto(`Digite o CPF do cliente que deseja excluir: `);
        const indice = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);
        if (indice !== -1) {
            this.clientes.splice(indice, 1);
            console.log(`\nCliente com CPF: ${cpf}, excluído com sucesso!\n`);
        } else {
            console.log(`CPF: ${cpf} inválido. Por favor, selecione um cliente válido.`);
        }
    }
}