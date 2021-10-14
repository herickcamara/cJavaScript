const aprovados = ['agatha','aldo','daniel','raquel']

aprovados.forEach(function(n , i, array){
    console.log(`${i}) ${n}`)
    console.log(array)
})

aprovados.forEach(nome => console.log( nome))

const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)