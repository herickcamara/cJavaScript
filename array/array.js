console.log(typeof Array.prototype, typeof new Array, typeof [])


aprovados = ['Bia','carlos','anaLiz']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//undenfinet

//add elementos no array 
aprovados[3] = 'herick'//add elementos e subistitui
aprovados.push('mariana')//add elementos na ultima posisão
console.log(aprovados.length)

// podemos add elamentos fora de sequencia 
aprovados[9] = 'luiz'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

// podemos horganivar
console.log(aprovados)
aprovados.sort()//organiza elementos
console.log(aprovados)

//deleta
delete aprovados[3]
console.log(aprovados)


aprovados = ['Bia','carlos','ana']
aprovados.splice(1,1)
//exclui item de array "splice(posisão , quantos elementos voce quer exluir)""
console.log(aprovados)

// tambem podemos exclui e incrementa elementos
aprovados.splice(1,0,'elementos1','elemento2')
//splice(posisão , quantos elementos voce quer exluir , os elementos que voce quer colocar)
console.log(aprovados)

