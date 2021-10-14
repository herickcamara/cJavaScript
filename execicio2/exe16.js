function biseto(ano){
    if(ano % 4===0){
        return true
    }else if(ano % 100 == 0 ){
        return false
    }else if(ano% 400 == 0){
        return true
    }else{
        return false
    }
}
console.log(biseto(2020))
console.log(biseto(2021))
console.log(biseto(2024))
console.log(biseto(2027))