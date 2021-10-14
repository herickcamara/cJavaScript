function vendaDeCarro(opcao){
    switch(opcao){
        case'hatch':
            return 'Compra efetuada com sucesso'
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Nao trabalhamos com esse tipo de automove"
    }
}
let carroS = "sedan"; carroH ="hatch";moto = "motocicleta"; ragge = "caminhonete"; mercedesBem = 'micronibus'
console.log(vendaDeCarro(carroS))
console.log(vendaDeCarro(moto))
console.log(vendaDeCarro(mercedesBem))
console.log(vendaDeCarro(carroH))