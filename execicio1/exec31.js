function encontraNumeroNegativo(vetor){
    let quantidate = 0
    let negativo = []
    let totalNegaivo= 0
    for(let i = 0 ; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativo.push(vetor[i])
            quantidate++
            totalNegaivo += vetor[i]
        }
    }
    console.log(`vc tem ${quantidate} numeros negativo`)
    console.log(`os numeros são [${negativo}]`)
    console.log(`total negativo ${totalNegaivo}`)
}
encontraNumeroNegativo([11, -2, 33, -11,22, 1, 2,3, -4,-3])