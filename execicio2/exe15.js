function pares(valor){
    const npar=[]
    for(let i= 0 ; i < valor.length;i+=2){
        if(valor[i] %2===0)npar.push(valor[i])
    }
    console.log(npar)
}

pares([1,2,3,4,5])
pares([10, 70, 22, 43,2,28,54,49])