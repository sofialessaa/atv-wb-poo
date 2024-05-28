export default class RG {
    private valor: string
    private dataEmissao: Date
    private uf: string

    constructor(valor: string, dataEmissao: Date, uf: string) {
        this.valor = valor
        this.dataEmissao = dataEmissao
        this.uf = uf
    }

    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public get getUF(): string {
        return this.uf
    }   
}