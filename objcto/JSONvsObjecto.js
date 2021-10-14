const obj = {a:1, b:2, c:3, soma(){ return a + b - c}}
console.log(obj)
console.log(JSON.stringify(obj))//trensforma objeto em um JSOM formato de String

/**para tranforma um JSON em um objeto de novo e preciso usar o JSON.parse() */
let trans = '{"a":1,"b":2,"c":3}'
console.log(JSON.parse(trans))

/**modo corato de escrever o JSON */

let json = {"a":1,"b":2,"c":3}//errado
// console.log(JSON.parse(json)) errou

    json = "{'a':1,'b':2,'c':3}"//errado
// console.log(JSON.parse(json)) errou

    json = '{"a":1,"b":2,"c":3}'// coreto
console.log(JSON.parse(json))//ok
