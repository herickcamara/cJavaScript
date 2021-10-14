const pessoaLinda = {
    name: 'anaLiz',
    idade: 1,
    peso: 10
}

/**Uma funçao importante do Object é a função "Object.keys"
 * esta função pega todas as chave de uma função
*/
console.log(Object.keys(pessoaLinda))

/**Outra muito importante é a função "Object.values" 
 * pega todos os valores de um object
*/
console.log(Object.values(pessoaLinda))

/**outra  chamada "Object.entries" 
 * pega chave e valor, separando por Arry
*/
console.log(Object.entries(pessoaLinda))
//podemos usa o Foreach
Object.entries(pessoaLinda).forEach(([chave, valor]) => {
    console.log(chave, valor)
})

/**temos tambem muito importante o "Object.defineProperty" 
 * esconde propriedades em um  object 
*/
Object.defineProperty(pessoaLinda, 'dataDeNacimento', {
    //comando para esconde a propriedade do object
        enumerable: false,
    //comando para nao alterar o valor da proprietade
        writable: false,
    value: '01/02/2020'
})
pessoaLinda.dataDeNacimento = '03/02/2020'
console.log(pessoaLinda.dataDeNacimento)
console.log(Object.keys(pessoaLinda))

/**Object.assign (ECMAScript 2015) 
 * concatena os Object dentro de um so object
*/
const dest = {a:1}
const o1 = {b: 2}
const o2 = {c:3 , a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

// object.freeze congela o object pasado
Object.freeze(obj)
obj.c = 1234
console.log(obj.c)