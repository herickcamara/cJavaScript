const cursos = ['html','css','javascript']
const cursos1 = ['python','ruby','react','pytho3','photoshop']

function filtro(palavra,valor){
    return valor.filter(valor=> valor.includes(palavra))
}
function filtro1(palavra,valor){
    const resutado = []
    for(let valores of valor){
        if(valores.includes(palavra))
        resutado.push(valores)
    }
    return resutado
}
let r = []

console.log(filtro1('py', cursos1))
