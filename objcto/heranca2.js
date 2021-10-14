//cadeia de prototype ( prototype chain)
const avo = {atributo1: "vó"}
const pai={__proto__:avo, atributo2: 'olhos'}
const filho = {atributo3:'orelha'}

Object.setPrototypeOf(filho, pai)
console.log(filho.atributo1)



const carro = {
 velAlta: 0,
 velMax: 200,
 acelera(delta){
     if(this.velAlta + delta <= this.velMax){
        this.velAlta += delta
     }else{
         this.velAlta = this.velMax
     }
     
 },
 s(){
    return `${this.velAlta} de ${this.velMax}`
}
}

const ferrare = {
    modelo:'F50',
    velMax:350,
    
}

const volvo = {
    modelo: 'V40',
 
    s(){
        return `${this.modelo} de ${super.s()}`
    }
}

Object.setPrototypeOf(ferrare,carro)
Object.setPrototypeOf(volvo, carro)


volvo.acelera(100)
console.log(volvo.s())

ferrare.acelera(250)
console.log(ferrare.s())