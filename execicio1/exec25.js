function repetirNumero(rn){
    console.log(rn)
    if( rn < 50){
        while(rn <= 50){
            console.log(rn)
            rn++
        }
    }else if ( rn >= 50){
        console.log(`o numero ${rn} nao e menor que 50`)
    }else {
        console.log(`${rn} nao é um numero`)
    }
}
repetirNumero("sadasd")