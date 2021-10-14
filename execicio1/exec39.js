function tranferancia(vetor1, vetor2){
    console.log(vetor1, vetor2)
    for(let i = 0; i < 5; i++){
        vetor2.push(vetor1[i])
        vetor1.push(vetor2[i])
        
        if(i==4){
        vetor2.splice(0,5)
        vetor1.splice(0,5)

        }
        
        
    }
    console.log(vetor1[0],vetor2[0])
    return [vetor1, vetor2]
}
console.log(tranferancia([1,2,3,4,5],[6,7,8,9,10]))