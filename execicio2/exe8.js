function mutiplicacao(numero1, numero2){
   let i = 0
   let contador = 0
   while(i <  numero2){
       contador += numero1
       i++
   }
   return contador
}
console.log(mutiplicacao(0, 10))