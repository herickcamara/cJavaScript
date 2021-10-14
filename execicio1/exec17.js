let salario = 1200
function novoalmento(fucionario, salario){
    switch(fucionario){
        case "a":
            almento = salario *10 /100
            return [almento+salario]
            break;
        case "b":
            almento = salario *15 /100
            return [almento+salario]
            break;
        case "c":
            almento = salario *20 /100
            return [almento+salario]
            break;
        default:
            return 'plano invalido'
    }
}
console.log(novoalmento("a",salario))
console.log(novoalmento("b",salario))
console.log(novoalmento("c",salario))
console.log(novoalmento("s",salario))