const pilotos = ['vettel','alonso', 'raikkonen','massa']

//metodos no array

pilotos.pop()//exclui a ultima posisão
console.log(pilotos)

pilotos.shift()//exclui o primeiro
console.log(pilotos)

pilotos.unshift('hamilton')// add na primeira posisão
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'massa', 'vettel')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

//slice retorna um novo array a patir do indice parçado
const algusPilotos = pilotos.slice(2)
console.log(algusPilotos)

const algusPilotos2 = pilotos.slice(1,3)
//primeiro indice passado indica a partida de onde vc que começa apegar o segundo ate aonde vc quer pegas
console.log(algusPilotos2)