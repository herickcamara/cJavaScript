function verificarValouDividito(n1){
  let nv = n1 % 3 == 0   ?true :false
  let nvo = Number.parseInt(n1 % 3)   ?true :false
  
  return {nv, nvo}
}
console.log(verificarValouDividito(2))
console.log(verificarValouDividito(3))
console.log(verificarValouDividito(150))