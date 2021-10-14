const sorteio = (valor)=>{
    const escolido = Math.floor(Math.random()* valor+1);
    if(escolido == valor)return `parabens o numero sorteado foi ${escolido}`
    return `Que pena o numero soteado foi ${escolido}`
}

console.log(sorteio(10))