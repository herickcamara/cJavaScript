// //usando a notaçao literal
// const obj1= {

// }
// console.log(obj1)

// //object em JS 
// console.log(typeof Object, typeof new Object)
//  const obj2 = new Object
//  console.log(obj2)

//  //funções construtoras
//  function produto(name, preco, desc){
//      this.name = name

     
//     this.getPrecoComDesconto = ()=> {
//         // calcula desconto
//         return preco * (1 - desc).toFixed(2)
//     }
// }

// const p1 = new produto ('caneta',2.00,0.05)
// const p2 = new produto('macios', 10000, 0.20)

// console.log(p1.preco)
// console.log(p1.getPrecoComDesconto())
// console.log(p2.getPrecoComDesconto())

// função Factory
// function criandoFuncionario(name, salarioBase, faltas){
//     return {
//         name,
//         salarioBase,
//         faltas,
//         getSalario(){
//             return (salarioBase / 30)*(30 - faltas)
//         }
//     }
// } 

// const f1 = criandoFuncionario('ana', 6000, 0)
// const f2 = criandoFuncionario('herick', 10000, 3)
// console.log(f1)
// console.log(f2,f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.name = 'anaLiz'
console.log(filha.name)


//funçao famoso  object..
const somJSOM = JSON.parse('{"infor":"eu sou um jsom"}')

console.log(somJSOM.infor)