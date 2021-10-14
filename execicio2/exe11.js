function primeitoUltimo(valor){
    const newArray = new Array 
    let leftNumber = 0
    for(let i = 0; i < valor.length;i++){
        if(i == 0)  newArray.push(valor[i])
        
        leftNumber = valor[i]

    }

    newArray.push(leftNumber)
    return newArray

}
let a= [1,2,3,3,5]
console.log(primeitoUltimo([1,2,3,2,34,6,7,8,9]))
console.log(a.shift(),a.pop())