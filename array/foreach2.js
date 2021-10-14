Array.prototype.forEach2 = function(parametro) {
    // this.element = element
    for(let i = 0 ;i < this.length; i++){
        parametro(this[i], i, this)
    }
}

const aprovados = ['agatha','aldo','daniel','raquel']

aprovados.forEach2(function(n,i,array){
    console.log(`${i}) ${n}`)
    console.log(array)
})