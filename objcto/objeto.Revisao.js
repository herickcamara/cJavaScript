//coleçao dinemica de pares chave/valor
const produto  = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'herick',
        idade: 28,
        endereco:{
            logradouro:'rua monte sinai',
            numero: 45
        }
    },
    condutores:[{
        nome:'mariana',
        idade: 24

    },
    {
        nome: 'anaLiz',
        idade: 1
    }],
    calculaeValorSeguro: function(){
        //..
    }
}

carro.proprietario.endereco.numero = 100
carro['proprietario']['endereco']['logradouro'] = "alphavile"
console.log(carro)
 delete carro.condutores
 delete carro.proprietario.endereco
 delete carro.calculaeValorSeguro
 console.log(carro)
 // cuidado para nao assesar uma propriedade que nao exist mais
 console.log(carro.condutores)