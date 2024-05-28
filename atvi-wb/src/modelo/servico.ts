export default class Servico {
    public nomeServico: string
    public precoServico: number
    public quantidadeServico: number = Number[0]
    public consumo !: number

    constructor(nomeServico: string, precoServico: number) {
        this.nomeServico = nomeServico
        this.precoServico = precoServico
        this.consumo = 0
    }
    
    public get getNomeServico(): string {
        return this.nomeServico
    }
    public get getPrecoServico(): number {
        return this.precoServico
    }
    public addConsumo(){
        this.consumo += 1
    }
}