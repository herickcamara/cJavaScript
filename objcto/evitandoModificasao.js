// Object.preventExtensions
/**previne que objeto receba mais atributo  */
const produto = Object.preventExtensions({
    name:'lapis', preso:1.90, marca:' fabrecastel'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.name = 'baracha'
produto.descrisao = 'lorem sihda m sjdias sadas'
delete produto.marca

console.log(produto)

//===========================================================================================
// Object.seal
/**Aceita que modifique o objeto, mais nao aceita que extenda, nem delete, 
 * um atributo de um objeto  */
const pessoa = {name: 'mariana', idade: 24}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.name =  'ana Liz'
pessoa.sombre = 'camara'
delete pessoa.idade

console.log(pessoa)

// Object.freezer nao permite vc modicicar neim deleta nem estende objeto criado
