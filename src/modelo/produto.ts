export default class Produto {
    public nomeProduto: string
    public precoProduto: number
    public quantidaDeProduto: number = Number[0]
    public consumo: number

    constructor(nomeProduto: string, precoProduto: number){
        this.nomeProduto = nomeProduto
        this.precoProduto = precoProduto
        this.consumo = 0
    }
    
    public get getNomeProduto(): string {
        return this.nomeProduto
    }

    public get getPrecoProduto(): number {
        return this.precoProduto
    }
    public addConsumo(){
        this.consumo += 1
    }
}