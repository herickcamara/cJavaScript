const num = [1,2,3,4,5]

// map é um for com proposito
let resultado = num.map(function(e){
    return e *2
})
console.log(resultado)

const soma = e =>  e * 1000
const subitracao = e  => e -1
const presoTotal = e  => `R$:${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = num.map(soma).map(subitracao).map(presoTotal)
console.log(resultado)