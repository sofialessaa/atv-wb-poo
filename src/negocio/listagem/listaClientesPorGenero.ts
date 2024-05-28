/* listagem de todos os clientes por genero */
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import Genero from "../../modelo/genero";

export default class ListaClientesPorGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        const mulheres = this.clientes.filter(cliente => cliente.genero === Genero.FEMININO);
        const homens = this.clientes.filter(cliente => cliente.genero === Genero.MASCULINO);
        const outros = this.clientes.filter(cliente => cliente.genero === Genero.OUTRO);
        
        console.log(`\n--------------------------------------`);
        console.log(`Lista dos clientes do sexo feminino:\n`);
        mulheres.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome + ` e CPF: ` + cliente.getCpf.getValor);
        });

        console.log(`\n--------------------------------------`);
        console.log(`Lista dos clientes do sexo masculino:\n`);
        homens.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome + ` e CPF: ` + cliente.getCpf.getValor);
        });

        console.log(`\n--------------------------------------`);
        console.log(`Lista dos clientes de outro gênero:\n`);
        outros.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome + ` e CPF: ` + cliente.getCpf.getValor);
        });

        console.log(`\n`);
    }
}