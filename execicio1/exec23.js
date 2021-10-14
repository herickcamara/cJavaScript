function calculaMedia(aluno, nota1, nota2, nota3){
    let media = nota1 + nota2 + nota3
    if(media / 3 >= 5){
        console.log('o aluno'+ aluno)
        console.log(`teve as seguintes notas ${nota1}, ${nota2}, e ${nota3  }`)
        console.log("sua media e de " + media /3 +"Aprovedo")

    }if(media/3 <5){
        console.log('o aluno'+ aluno)
        console.log(`teve as seguintes notas ${nota1}, ${nota2}, e ${nota2  }`)
        console.log("sua media e de " + media /3 +"reprovado")
    }
}
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
calculaMedia(123, 5,2,7)