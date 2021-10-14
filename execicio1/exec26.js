function par(){
    let par=[]
    let impar=[]
    for(let i=1; i< 101;i++){
        if(i%2 == 0){
            par.push(i)
            
        }else{
            impar.push(i)
        }
    }
    console.log(`os numero pares são:
    ${par}

    e os impar são:
    
     ${impar}`)
}
par()