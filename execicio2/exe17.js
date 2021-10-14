function soma(valor){
    this.valor = valor.reduce((a,b)=>{return a+b})
    console.log(this.valor)
}
soma([1,2])

