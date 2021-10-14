let soma = "+"; subitracao = "-"; mutiplicasao = "*"; divisao = "/"
function calculadora( n1, opracao, n2 ){
    switch(opracao){
        case '+':
            return n1 + n2
            break;
        case "-":
            return n1 - n2
            break;
        case "*":
            return n1 * n2 
            break;
        case "/":
            return n1 / n2
            break;
        default:
            return 'opracao invalido'
        

    }
}
console.log(calculadora(5, soma,2))
console.log(calculadora(5, subitracao,2))
console.log(calculadora(5, mutiplicasao,2))
console.log(calculadora(5, divisao,2))
console.log(calculadora(2, 2,5))