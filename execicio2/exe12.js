const pessoa = {
    nome:'herick',
    idade:29,
    cabelo:"preto"
}
const as = {
    a:'alo',b:'mundoo'
}

function removeAtribto(prope ,atributo){
   const copia ={...prope}
    delete copia[atributo]
    
    return copia

}
console.log(removeAtribto(pessoa, 'idade'))
console.log(pessoa)

console.log(as)
console.log(removeAtribto(as, 'a'))
