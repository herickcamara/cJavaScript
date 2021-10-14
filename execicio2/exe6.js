function transformacao(valor){
    if(typeof valor === typeof '' )return `o valor parasado nao é um numero nei boleando`
 
    return  typeof valor === typeof true ? !valor : 0 - valor
}
console.log(transformacao(true))
console.log(transformacao(-2000))
console.log(transformacao('true'))