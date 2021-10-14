function faturial(n){
    if(n == 0){
        return 1
    }else{
        return n * faturial(n - 1)
    }
}
console.log(faturial(800))