class Lancamentos {
    constructor (name = 'Generico', valor = 0){
        this.name = name
        this.valor = valor
    }
}

class CicloFinaceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamento){
        lancamento.forEach(l => this.lancamentos.push(l))
        
    }

    sumario(){
        let contador = 0
        this.lancamentos.forEach(l =>{
            contador += l.valor
        })
        return contador.toFixed(2)
    }
}


const salario = new Lancamentos('salario', 3550)
const aluguel = new Lancamentos('aluguel', -650)
const contas = new CicloFinaceiro(6,2021)


contas.addLancamentos(salario,aluguel)
console.log(contas.sumario())
let lancametoJSON= JSON.stringify(contas.lancamentos)

function funcaJSON(){
   lancametoJSON = JSON.parse(lancametoJSON)
    for(let i =0 ; i < lancametoJSON.length; i++ ){
        console.log(lancametoJSON[i])
    }
}
funcaJSON()
console.log()
