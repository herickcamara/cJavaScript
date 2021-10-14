function removelVogays(valor){
    let r = valor.replace(/[aeiou]/ig,'')
     return r || []
 }
 

console.log(removelVogays1('mariana'))