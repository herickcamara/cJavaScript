/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

const investimento = 100000
const rendimento = .50
const meses = 12

function aplicacao(capitalInicial, taxaDeJuros, tempoAplicacao){
    let taxaMes = capitalInicial / 100 *taxaDeJuros *tempoAplicacao
    let rendimentoTotal = (capitalInicial + taxaMes).toFixed(2).toString().replace('.', ',')


    console.log(`
    investimento R$:${(capitalInicial).toFixed(2).toString().replace('.', ',')}
    messes investido: ${tempoAplicacao}
    rendimento R$:${(taxaMes).toFixed(2).toString().replace('.', ',')}  
    total ao final R$:${rendimentoTotal}          
    `)
}
aplicacao(investimento,rendimento,meses)