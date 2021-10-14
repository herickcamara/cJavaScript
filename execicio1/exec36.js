function mutiplicacaoDoVetor(vetor,numero){
    let resultadoDaMtiplicacao = []
    for(let i = 0 ; i < vetor.length; i++){
        let result = vetor[i] * numero
        resultadoDaMtiplicacao.push( result )
    }
    return 'function 1): '+resultadoDaMtiplicacao
}
function mutiplicaSomentMaiorQue5(vetor,numero){
    let resultadoDaMtiplicacao =[]
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 5){
            resultadoDaMtiplicacao.push( vetor[i] * numero)
        }        
    }
    return " function 2): "+ resultadoDaMtiplicacao
}
console.log(mutiplicacaoDoVetor([1,2,3,4,5,6,7,8,9,10],2))
console.log(mutiplicaSomentMaiorQue5([1,2,3,4,5,6,7,8,9,10],2))