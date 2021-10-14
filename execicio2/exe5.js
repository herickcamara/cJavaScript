function maioMenor(maior,menor) {
   if(typeof maior != typeof menor ) return false
    
   
   
   return maior >=menor
    
    
    
}

console.log(maioMenor(0,0))
console.log(maioMenor(1,"0"))
console.log(maioMenor(5,0))