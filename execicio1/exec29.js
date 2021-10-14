const vetor =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
function percorrendoVetor(vetor){
   let numeroEntre10e20 = [], numerosPercorrido = []

    for(let i = 0;i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i]<= 20){
            numeroEntre10e20.push(vetor[i])
        }else{
            numerosPercorrido.push(vetor[i])
        }
    }
    console.log('vetor pecorido '+vetor)
    console.log('numeros entre [10 e 20]'+numeroEntre10e20)
    console.log('numeros percorido '+numerosPercorrido)
}
percorrendoVetor(vetor)