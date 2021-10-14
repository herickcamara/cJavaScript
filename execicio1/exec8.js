let pontos="23,40,27,34,04,54,63,56,24,05,72,03,02,66,53"

function desepenhoJogo(pontos){
    let pontuacao = pontos.split(',')
    let quebraDeRecorde = 0
    let piorJogos = 0
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]
    for(let i = 1 ; i < pontuacao.length; i++){
        if(pontuacao[i] > maiorPontuacao){
            maiorPontuacao = pontuacao[i]
            quebraDeRecorde++
        }else if(pontuacao[i] < menorPontuacao){
            menorPontuacao = pontuacao[i]
            piorJogos = i +1+menorPontuacao[0].length
            
        }
    }
    let p = pontuacao.length
    return {
        maiorPontuacao,
        quebraDeRecorde,
        menorPontuacao,
        piorJogos,
        p
    }
    
}
 
console.log(desepenhoJogo(pontos))