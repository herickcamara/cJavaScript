const numero = [1,2,3,4,5]
const numero1 = [0,10]

function somaMeia(valor){
    this.valor = valor.reduce((n1,n2)=> n1+n2)
    return this.valor / valor.length
}
console.log(somaMeia(numero))
console.log(somaMeia(numero1))