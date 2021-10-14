const quaseArray = {0:'herick', 1:'mariana', 2:'anaLiz'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'e', {
    value:function(){ return Object.values(this)},
    enumerable:false
})
console.log(quaseArray[0])
const meuArray = ['herick','ana', 'mariana']

console.log(quaseArray.e(), meuArray)