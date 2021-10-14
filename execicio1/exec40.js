function sepaRasãoDeNotas(vetor){
  
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] <=4.9 && vetor[i] >= 0.0 ){
            console.log('nota D')
        }else if(vetor[i] <= 6.9){
            console.log('Nota C')
        }else if(vetor[i] <= 8.9){
            console.log('Nota B')
        }else if(vetor[i] <= 10){
            console.log('Nota A')
        }
        
    }
}
sepaRasãoDeNotas([4.9, 5, 6.9, 7, 8.9, 9, 9.9 , 10,0.1 ])