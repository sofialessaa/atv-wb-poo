import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import Genero from "../../modelo/genero";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let dataCadastro = new Date().toLocaleDateString();
        console.log(`\nInício do cadastro do cliente`);

        /* nome */
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);

        /* cpf */
        let valorCPF = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesDataCPF = dataCPF.split('/');
        let diaCPF = parseInt(partesDataCPF[0], 10);
        let mesCPF = parseInt(partesDataCPF[1], 10) - 1; 
        let anoCPF = parseInt(partesDataCPF[2], 10);
        let dataEmissaoCPF = new Date(anoCPF, mesCPF, diaCPF);
        let cpf = new CPF(valorCPF, dataEmissaoCPF);

        /* capturar o gênero do cliente */
        let genero: Genero | null = null; 
        do {
            let generoString = this.entrada.receberTexto(`Por favor informe o gênero do cliente (F/M/O): `).toUpperCase();
            if (generoString === 'M' || generoString === 'F' || generoString === 'O') {
                genero = generoString as Genero; 
            } else {
                console.log('Opção inválida! Por favor, escolha entre M, F ou O.');
            }
        } while (!genero);

        /* RGs */
        let rgs: Array<RG> = [];
        while (true) {
            let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
            let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
            let partesDataRG = dataRG.split('/');
            let diaRG = parseInt(partesDataRG[0], 10);
            let mesRG = parseInt(partesDataRG[1], 10) - 1; 
            let anoRG = parseInt(partesDataRG[2], 10);
            let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
            let ufRG = this.entrada.receberTexto(`Por favor informe a UF do RG: `);
            let rg = new RG(valorRG, dataEmissaoRG, ufRG);

            rgs.push(rg);

            let continueInput = this.entrada.receberTexto(`Deseja cadastrar outro RG? (s/n): `);
                if (continueInput.toLowerCase() !== 's') {
                    break;
                }
            }
        
        /* telefone */
        let telefones: Array<Telefone> = [];
        while (true) {
            let ddd = this.entrada.receberTexto(`Por favor o DDD: `);
            let numero = this.entrada.receberTexto(`Por favor informe o número de telefone: `);
            let telefone = new Telefone(ddd, numero);

            telefones.push(telefone);

            let continueInput = this.entrada.receberTexto(`Deseja cadastrar outro número de telefone? (s/n): `)
                if (continueInput.toLowerCase() !== 's') {
                    break;
                }
            }

        /* cadastro do cliente */
        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rgs, dataCadastro, telefones);

        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
    }
}
