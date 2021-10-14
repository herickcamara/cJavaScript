const meses =[
    'janeiro',
    'fevereiro',
    'marco',
    'abril',
    'maio',
    'junho', 
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novenbro',
    'dezembro'
]
function mes(mes){
    if(mes >0 && mes <=12){
        meses.unshift('')
    return  meses[mes]
    }
    return 'mes nao exite'
}
console.log(mes(0))

function m(mes) {
    switch(mes){
        case 1:
            return 'janeiro'
        case 2:
            return 'FEVEREIRO'

        case 3:
            return 'MARCO'

        case 4:
            return 'ABRIL'

        case 5:
            return 'MAIO'

        case 6:
            return 'JUNHO'

        case 7:
            return 'JULHO'

        case 8:
            return 'AGOSTO'

        case 9:
            return 'SETEMBRO'

        case 10:
            return 'OUTUBRO'

        case 11:
            return 'NOVEMBRO'

        case 12:
            return 'DEZENBRO'
            
        

    }
}
console.log(m(1))