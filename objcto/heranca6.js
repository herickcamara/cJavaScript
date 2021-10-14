function Aula (name, videoId){
    this.name = name,
    this.videoId = videoId
}
const ob1 = new Aula('ola mundo', 2020)
const obj2 = new Aula('hello world', 2021)

console.log( ob1, obj2)

function novo(f, ...parames){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, parames)
    return obj
}

const obj3 = novo(Aula, 'teste aula', 188)
const obj4 = novo(Aula, 'ola mundo', 2021)

console.log(obj3, obj4)
