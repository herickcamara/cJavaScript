const ferrare = {
    modelo: 'f40',
    velMax: 320
}

const volvo = {
    modelo:'V40',
    velMax:200
}

console.log(ferrare.__proto__)//object
console.log(ferrare.__proto__ === Object.prototype)//true
console.log(volvo.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__)//===null
console.log(Object.prototype.__proto__ === null)// true

function MeuObject(){}
console.log(typeof Object, typeof MeuObject)
console.log(Object.prototype, MeuObject.prototype)
console.log(MeuObject.prototype.__proto__)
console.log(Object.prototype.__proto__)
console.log(MeuObject.prototype === Object.prototype)