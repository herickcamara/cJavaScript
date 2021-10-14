function faxaDeCrecimento(altura1,tx1, altura2, tx2){
           let crianca1= altura1 
           let crianca2= altura2 
           let idade = 0
           if(crianca1 >= crianca2 ){
               while(crianca1 >=crianca2){
                   
                   if(crianca1 < crianca2){ break}
                   if(idade == 18){break}
                  idade++
                  crianca1 += tx1
                   crianca2 += tx2
                }
               if(crianca1 >= crianca2){
                console.log(`a criança 2, nuca passara e criança 1 `)
             }else if(crianca1 < crianca2){
                console.log(`a crianca 2 pasara a crianca 1 com ${idade} anos`)
             }
           }else if(crianca1 <= crianca2 ){
            while(crianca1 <=crianca2){
                
                if(crianca1 > crianca2){ break}
                if(idade == 18){break}
               idade++
               crianca1 += tx1
                crianca2 += tx2
             }
            if(crianca1 <= crianca2){
             console.log(`a criança 1, nuca passara e criança 2 `)
          }else if(crianca1 > crianca2){
             console.log(`a crianca 1 pasara a crianca 2 com ${idade} anos`)
          }
        }
}
faxaDeCrecimento(.54,.33, .46, .34)




function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}
function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(.54,.33, .46, .34));