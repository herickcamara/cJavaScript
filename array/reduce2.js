const alunos = [
    {nome:'herick', nota:9.9, bolsista: false},
    {nome:'ana', nota:6.9, bolsista: true},
    {nome:'mariana', nota:8.9, bolsista: false},
    {nome:'meria', nota:7.9, bolsista: true},
]

//desafio 1 : totos alunos são bolsista
const bolsista = (resutal, bolsistas)=> resutal && bolsistas
const todosAlunos = alunos.map(a => a.bolsista).reduce(bolsista)
console.log(todosAlunos)
//desafio 2: algum aluno é bolsista

const algumBolsista = (resutal, bolsistas)=> resutal || bolsistas
const total = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(total)