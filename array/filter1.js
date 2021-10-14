//criando um 
const prodtos = [
    {nome:'notboock', preco: 2499, fragio: true},
    {nome:'notboock', preco: 4999, fragio: true},
    {nome:'notboock', preco: 12.90, fragio: true},
    {nome:'notboock', preco: 24.90, fragio: false}

]

const caro = c => c.preco >=10.00
const fragio = f => f.fragio === false

console.log(prodtos.filter(caro).filter(fragio))