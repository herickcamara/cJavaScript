const sequecia = {
    _valor :1, //convenção
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequecia.valor, sequecia.valor)
sequecia.valor = 3
console.log(sequecia.valor, sequecia.valor)
sequecia.valor = 2
console.log(sequecia.valor, sequecia.valor)
sequecia.valor = 1
console.log(sequecia.valor, sequecia.valor)
