

function cadapio (code, contidade){
        let pagar;
    
        switch(code){
        case 100:
             pagar = contidade * 3.05
            return 'R$:'+ pagar.toFixed(2).toString().replace('.',',')
            break
        case 200:
             pagar = contidade * 4
            return 'R$:'+ pagar.toFixed(2).toString().replace('.',',')
            break;
        case 300:
            pagar = contidade * 5.50
            return 'R$:'+ pagar.toFixed(2).toString().replace('.',',')
            break;
        case 400:
            pagar = contidade * 7.55
            return 'R$:'+ pagar.toFixed(2).toString().replace('.',',')
            break;
        case 500:
            pagar = contidade * 3.44
            return 'R$:'+ pagar.toFixed(2).toString().replace('.',',')
            break;
        case 600:
            pagar = contidade * 2.80
            return 'R$:'+ pagar.toFixed(2).toString().replace('.',',')
            break;
        default:
            return "codego invalido"
    }
}
console.log(cadapio(100,2))
console.log(cadapio(200,2))
console.log(cadapio(300,2))
console.log(cadapio(400,2))
console.log(cadapio(500,2))
console.log(cadapio(600,2))
console.log(cadapio(700,2))