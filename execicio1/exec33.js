let vetorIntero = [1,2,3,4]
let vetorString = [1.1,1.2,1.3,1.4]
let vetorDouble = ['herick','mariana',"anaLiz",'cananda']
function iniao(...valor){
    let restado = []
    for(let i = 0 ; i < valor.length ; i++){
        restado = restado.concat( valor[i])
    }
    console.log(restado)
}
iniao(vetorIntero,vetorString)
iniao(vetorDouble,vetorString)