const produtos = [
    {nome:'nootebook', marca: 'hp', preso:2500},
    {nome:'cardelo', marca: 'hora de code', preso:20},
    {nome:'caneta', marca: 'bic', preso:5.90},
]
const somaTotal = (valor)=>{
    this.valor = valor.map(preso => preso.preso).reduce((p,pp)=>p+pp);
    console.log(`R$: ${parseFloat(this.valor).toFixed(2).replace('.',',')}`)
}
somaTotal(produtos)