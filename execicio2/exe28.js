
const array = [1,31,7,18,4,5,6,29]
function seguanMaior(valor){
   
    valor.sort((a,b)=>a -b)
    console.log(valor.reverse()[1])
}
seguanMaior(array)