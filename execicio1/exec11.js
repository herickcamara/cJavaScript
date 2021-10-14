function anoBisxesto(ano){
    if(ano <= 0){
        return false
    }else if(ano % 400 == 0){
        return true

    }else if(ano % 100 ==0){
        return false
    }else if(ano % 4 == 0){
        return true

    }else{
        return false
    }
}
console.log(anoBisxesto(100))
console.log(anoBisxesto(400))
console.log(anoBisxesto(4))
console.log(anoBisxesto(800))
console.log(anoBisxesto(2023))