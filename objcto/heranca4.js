function MeuObject(){}
console.log(MeuObject.prototype)
console.log(MeuObject.prototype.__proto__)

const obj1 = new MeuObject;
const obj2 = new MeuObject;

console.log(obj1 === obj2)//false
console.log(obj1.__proto__ === obj2.__proto__)//true
console.log(MeuObject.prototype === obj1.__proto__)//true
MeuObject.prototype.name = 'anonimo'
MeuObject.prototype.sobreName = 'camara'
MeuObject.prototype.fale = function () {
      console.log(`My Name is ${this.name} ${this.sobreName}`)
}

obj1.sobreName = 'desconhecido'
obj1.fale()

obj2.name = 'herick'
obj2.fale()

const obj3 = {}
console.log(obj3.__proto__)
obj3.__proto__ = MeuObject.prototype
console.log(obj3.__proto__)

obj3.name = 'mariana'
obj3.fale()