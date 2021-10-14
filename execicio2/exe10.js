function repetir( vezes){
    let newArray=[];
    for(let i = 0 ; i< vezes;i++){
        newArray.push('+')
    }
    return newArray.toString().replace(/,/g,' ')
}

console.log(repetir(2))
console.log(repetir(3))


function repetir1(vezes){
    
    return ' +'.repeat(vezes)
}

console.log(repetir1( 2))
console.log(repetir1(7))