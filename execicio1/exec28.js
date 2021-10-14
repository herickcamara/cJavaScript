let val = [ 1, 2, 3,45,10,47,82,429,103,55]
function lendoUmVertorDeNumeros(val){
    let par = [], impar = []
    for(let i = 0; i < val.length; i++){
        if(val[i] % 2 == 0){
            par.push(val[i])
        }else{
            impar.push(val[i])
        }
    }
    console.log(`os numero pares são:${par}
    e os impar são: ${impar}`)
}
lendoUmVertorDeNumeros(val)