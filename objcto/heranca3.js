const pai ={ name:'herick', cabelo:'preto'}

const filhar = Object.create(pai)
filhar.name = 'anaLiz'

console.log(filhar)

const filhar2 = Object.create(pai,{
    name: {value: 'maria', writable: false, enumerable: true},
    idade:{value: 18, writable:true , enumerable: true},
    peso:{value:54, writable: false, enumerable :false}
})
filhar2.name = 'mary '
console.log(filhar2)

console.log(Object.keys(filhar2))
console.log(Object.keys(filhar))

console.log(filhar2.name)
for(let key in filhar2){
    filhar2.hasOwnProperty(key)?
        console.log(key):
            console.log(` por herdada ${key.cabelo}`)
}

