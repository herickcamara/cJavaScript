function recebeValou(v1, v2){
    if(v1 < v2 || v1===v2 ){
        let v3 = v1
        v1 = v2
        v2=v3
        let resutado = v1%v2 
        console.log(`restado ${Math.floor(v1/v2)}`)
        console.log(`o resto da divisao é ${resutado}`)
    }else{
        let resutado = v1%v2 
        console.log(`restado ${Math.floor(v1/v2)}`)

        console.log(`o resto da divisao é ${resutado}`)
   
    }

    
}
recebeValou(3, 2)

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(3, 2)