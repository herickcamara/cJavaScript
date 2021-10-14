/**
 * Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
 */

function salario(horas, prohoras){
    if(typeof horas == typeof 1 && typeof prohoras == typeof 1){
        return (`salario igual a R$: ${parseFloat(horas * prohoras).toFixed(2).replace('.',',')}`)
    }
        return('numero nao indentificado')
}

console.log(salario(150, 40.5))