/* listagem geral dos serviços ou produtos mais consumidos */
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListaGeralServicoProdutoMC extends Listagem {
    private clientes: Array<Cliente> 
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }
    
    public listar(): void {
        console.log('Listagem de produtos ou serviços gerais mais consumidos:');

        const topProdutos: Array<Produto> = []
        const topServicos: Array<Servico> = []
  
        /* produtos */
        this.produtos.forEach(produto => {
            topProdutos.push(produto)
        })

        topProdutos.forEach(prod => {
            let qtdProduto = 0
            
            this.clientes.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prodConsumido => {
                    for (let indexProduto = 0; indexProduto < topProdutos.length; indexProduto++) {
                        if (prodConsumido.nomeProduto == prod.nomeProduto) {
                            qtdProduto += 1
                        }     
                    }       
                })
            });

            prod.quantidaDeProduto = qtdProduto;
        })
        
        topProdutos.sort((prod1, prod2) => (prod1.quantidaDeProduto > prod2.quantidaDeProduto) ? -1 : 1)
            console.log(`\n--------------------------------------`)
            console.log(`PRODUTOS:`);

            let ordemProd = 1;

            topProdutos.forEach(prod => {
                console.log(`${ordemProd} - ${prod.nomeProduto}`);
                ordemProd++;
        });

        /* serviços */
        this.servicos.forEach(servico => {
            topServicos.push(servico)
        })

        topServicos.forEach(serv => {
            let qtdServico = 0
            
            this.clientes.forEach(cliente => {
                cliente.getServicosConsumidos.forEach(servConsumido => {
                    for (let indexServico = 0; indexServico < topServicos.length; indexServico++) {
                        if (servConsumido.nomeServico == serv.nomeServico) {
                            qtdServico += 1
                        }     
                    }       
                })
            });

            serv.quantidadeServico = qtdServico;
        })

        topServicos.sort((serv1, serv2) => (serv1.quantidadeServico > serv2.quantidadeServico) ? -1 : 1)
            console.log(`\n--------------------------------------`)
            console.log(`SERVIÇOS:`);

            let ordemServ = 1;

            topServicos.forEach(serv => {
                console.log(`${ordemServ} - ${serv.nomeServico}`);
                ordemServ++;
        });
    }
}