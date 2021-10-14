const a = 1
const b = 2 
const c = 3


const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1,obj2)

//create two const one heve name the atribuld, two heve value '' 
const nameAtribuld ='nota'
const valueAtribuld = 7.87
//create one object, com os element
const obj3 = {}
obj3[nameAtribuld] = valueAtribuld
console.log(obj3)

const obj4 = {[nameAtribuld]:valueAtribuld}
console.log(obj4)
//create function end object
const obj5 = {
    //forma mais antiga
    function1: function(){
    //..
    },
    //formato novo ec6
    function2(){
        //..
    }

}
console.log(obj5)