function triangulos(lado1, lado2, lado3){
    if (lado1 + lado2 > lado3 && lado3 + lado2 > lado1 && lado1 + lado3 > lado2){
        if(lado1 === lado2 && lado2 === lado3){
            console.log("o triangolo é Equilátero")
        }else if (lado1 === lado2 || lado2 === lado3 ||lado1 === lado3) {
            console.log("o triangolo é Isósceles")
    
        }else if (lado1 !== lado2 || lado2 !== lado3 ||lado1 !== lado3){
            console.log("o triangolo é Escaleno")
    
        }
    }else{
        console.log('nao forma triangulo')
    }
    
   
}
triangulos(4,5,2)