function planoDeSaude(idade){
    if(idade <=10 && idade >=0){
        return 100+80
    }
    if(idade >10 && idade <=30){
        return 100+50
    }
    if(idade >30 && idade <=60){
        return 100+95
    }
    if(idade >60){
        return 100+130
    }
}
console.log(planoDeSaude(7))
console.log(planoDeSaude(30))
console.log(planoDeSaude(27))
console.log(planoDeSaude(100))
console.log(planoDeSaude(1))