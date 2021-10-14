function caixaEletronico(valouDeSq){
    let contador100 = 0 
    let contador50 = 0 
    let contador20 = 0 
    let contador10 = 0 
    let contador5 = 0 
    let contador1 = 0
   let valueNota = contadorDeNota(valouDeSq) 
   while(valouDeSq >= valueNota){
        switch(valueNota){
            case 100:
                valouDeSq -= 100
                contador100++
                break            
            case 50:
                valouDeSq -= 50
                contador50++
                break 
            case 20:
                valouDeSq -= 20
                contador20++
                break
            case 10:
                valouDeSq -= 10
                contador10++
                break
            case 5:
                valouDeSq -= 5
                contador5++
                break
            case 1:
                valouDeSq -= 1
                contador1++
                break
        }
        valueNota = contadorDeNota(valouDeSq)
        console.log(valueNota)
   }
   return contador(contador100, contador50, contador20, contador10, contador5,  contador1)
}
function contadorDeNota(valouDeSq){
    if(valouDeSq >= 100){
        return 100
    }else if(valouDeSq >= 50){
        return 50
    }else if(valouDeSq >= 20){
        return 20
    }else if(valouDeSq >= 10){
        return 10
    }else if(valouDeSq >= 5){
        return 5
    }else if(valouDeSq >= 1){
        return 1
    }
}
function contador(contador100,contador50, contador20, contador10, contador5, contador1){
    let resultado =' '
    if(contador100 > 0){
        resultado += ` [${contador100} notas de R$: 100]`
    }
    if(contador50 > 0){
        resultado += ` [${contador50 } nota de R$: 50]`
    }
    if(contador20 > 0){
        resultado += ` [${contador20 } nota de R$: 20]`

    }
    if(contador10 > 0){
        resultado += ` [${contador10 } nota de R$: 10]`

    }
    if(contador5 > 0){
        resultado += ` [${contador5} nota de R$: 5]`

   }
   if(contador1 > 0){
       resultado += ` [${contador1 } nota de R$: 1]`
   }
   return resultado
}
console.log(caixaEletronico(18))