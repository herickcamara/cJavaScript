//criando um filter
Array.prototype.filter2 = function(callback){
    newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
} 

const prodtos = [
    {nome:'notboock', preco: 2499, fragio: true},
    {nome:'notboock', preco: 4999, fragio: false},
    {nome:'notboock', preco: 12.90, fragio: true},
    {nome:'notboock', preco: 24.90, fragio: false}

]

const caro = c => c.preco >=2000
const fragio = f => f.fragio 

console.log(prodtos.filter2(caro).filter2(fragio))