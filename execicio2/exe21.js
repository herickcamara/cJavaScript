const numeros = [-16,4,5,9,-15,6,5]

const menorNumero=(valor)=>{
   this.valor = valor.reduce((n1,n2)=>{if(n1 < n2){return n1 } return n2})
    return this.valor
}
console.log(menorNumero(numeros))