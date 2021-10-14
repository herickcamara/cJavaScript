const carinho = [
    '{"nome":"boracha", "preco":2.50}',
    '{"nome":"carderno", "preco":10.90}',
    '{"nome":"lapis", "preco":1.90}',
    '{"nome":"apontador", "preco":2.50}',
]
let c = []
let total = 0

//Retorne um array apenas com um preso
const j = json => JSON.parse(json)
const p = produto => produto.preco.toFixed(2)
  
/* const t = total =>{ 
         c.push(JSON.parse(carinho[total]))
        total+= c[total].preco
        
    } */


let preco = carinho.map(j).map(p)
/* let amout = carinho.map(t) */
 for(let i = 0; i < carinho.length;i++){
    c.push(JSON.parse(carinho[i]))

    total+= c[i].preco

} 
console.log(preco)
console.log(parseFloat(total).toFixed(2))