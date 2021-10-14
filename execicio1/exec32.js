function calculaMediaDeUmVetor(vetor){
    let totalDoVetor = 0
    for(let i = 0 ; i < vetor.length; i++){
        totalDoVetor += vetor[i]
    }
    let media = totalDoVetor / vetor.length
    console.log(`total ${totalDoVetor}`)
    console.log(`media ${media}`)
}
calculaMediaDeUmVetor([4,6,5,])