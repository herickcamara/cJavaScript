function maiorMenor(vetor){
    let maior = 0
    let menor = 0;
    for(let i = 0; i < vetor.length;i++){
        if( maior === 0 && menor ===0 ){
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
        
    }
    
    console.log(maior, menor);
}
maiorMenor([5,3,7,8,51,9,73,6,0,10])