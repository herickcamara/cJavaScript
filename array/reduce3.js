Array.prototype.reduce2 = function(callback,valorInicial){
    const indice = valorInicial ? 0 :1
    let acumulador = valorInicial || this[0]
    for(let i = indice; i < this.length; i++){
        acumulador = callback(acumulador, this[i],i,this)
    }
    return acumulador
}

const soma = (valor1, valor2)=> valor1 + valor2
const nums = [1, 2, 3, 4, 5]
const resultado = nums.reduce2(soma,10  )
console.log(resultado)