const prodtos = [
    {nome:'notboock', preco: 2499, fragio: true},
    {nome:'notboock', preco: 4999, fragio: false},
    {nome:'notboock', preco: 12.90, fragio: true},
    {nome:'notboock', preco: 24.90, fragio: false}

]

const resutado = prodtos.map(a => a.preco).reduce((c, p)=>{
    return c + p
})

console.log(resutado.toFixed(2))