function addAll(vetorPilha, vetorAdicione){
    let addVetor = 0
    while(addVetor < vetorAdicione.length){
        vetorPilha.push(vetorAdicione[addVetor])
        addVetor++
    }
    return vetorPilha
}
console.log(addAll([1,2,3,4,5],[6,7,8,9,10,11,12]))