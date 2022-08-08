class Fruit{
    private _nome: string
    private _nutritions: Object
    private _qtd: Number
    
    constructor( nome: string, nutritions: Object, qtd: Number){
        this._nome = nome
        this._nutritions = nutritions
        this._qtd = qtd
    }

}
export default Fruit;