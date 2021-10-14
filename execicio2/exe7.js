function estaEntre(minimo, maximo, numero, incluvivo = false){
    if(incluvivo)return numero >= minimo && numero <= maximo;

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10,100, 50))
console.log(estaEntre(10,100, 160))
console.log(estaEntre(10,100, 10))
console.log(estaEntre(10,100, 10, true))