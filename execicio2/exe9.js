function repetir(valor, vezes){
    const newArray = new Array
    for(let i = 0 ; i< vezes;i++){
        newArray.push(valor)
    }
    return newArray
}

console.log(repetir('ola', 2))
console.log(repetir(7, 3))