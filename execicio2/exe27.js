function inverso(obj){
    let valores = Object.values(obj);
    let chave = Object.keys(obj)
    let obj1 ={}
    for(let i =0; i < chave.length;i++){
        obj1[valores[i]]= chave[i]
    }

    return obj1[3]
}

console.log(inverso({a:1,b:2,c:3}))
console.log(inverter({a:1,b:2,c:3}))