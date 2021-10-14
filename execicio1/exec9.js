let nota = (Math.random()*100)
function separacaoDeNotas(nota){
    let notaCorrigida = arrendonda(nota)
    if(notaCorrigida > 40 ){
        console.log(`aprovedo ${notaCorrigida}`)
    }else{
        console.log(`reprovado ${notaCorrigida}`)
    }
}

function arrendonda(nota){
    if( nota % 5 > 2){
        return nota + (5- (nota % 5))
    }else{
        return nota
    }
}
console.log(separacaoDeNotas(38))
console.log(separacaoDeNotas(48))
console.log(separacaoDeNotas(58))
console.log(separacaoDeNotas(28))
console.log(separacaoDeNotas(88))