const pessoa = {
    nome:'herick',
    idade:28
}

const objctoParaArray = (obj)=>{
    resutado = []
    for(let chave in obj){
    resutado.push([chave , obj[chave]])
    }
    console.log( resutado)
}
objctoParaArray(pessoa)
console.log()
