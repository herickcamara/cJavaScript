// criando um fletmap

const escola = [
    {
        nome:"turma m1",
        alunos:[
            {
                nome:'herick',
                nota:9.99
            },
            {
                nome:'mariana',
                nota:10
            }
        ]
    },
    {
        nome:"turma m2",
        alunos:[
            {
                nome: 'patricia',
                nota:8.6
            },
            {
                nome: 'gustavo',
                nota:9.70
            }
        ]
    }
]

const getNotas = aluno => aluno.nota
const notas = notas => notas.alunos.map(getNotas) 
const todasNotas = escola.map(notas)

console.log()
console.log(todasNotas)

Array.prototype.fleMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback) )
}
const getNotasFormat = escola.fleMap(notas)

console.log(getNotasFormat)