class Avo {
    constructor(sobrename){
        this.sobrename = sobrename
    }
}

class pai extends Avo {
    constructor(sobrename, proficao = 'programador'){
        super(sobrename)
        this.proficao = proficao
    }
}

class Filho extends pai{
    constructor(){
        super('camara')
    }
}
const filho = new Filho
const avo = new pai
console.log(filho)
console.log(avo)