const alunos = [
    {nome:'herick', nota: 9.99},
    {nome:'mariana', nota: 8.70}
]

//imperativa
let total =0
for(let i = 0;i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

//declarativa
const todasNota = notas => notas.nota
const soma = (indice,notas)=> indice + notas
const total1 = alunos.map(todasNota).reduce(soma)

console.log(total1/ alunos.length)