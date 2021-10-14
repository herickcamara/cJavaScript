function palavraComMesmoCaraqueter(String1, String2){
    let resute = true
    for(let i = 0; i < String1.length; i++){
        let caraqeterString1 = String1.charAt(i).toLowerCase()
        for(let o = 0; o < String2.length; o++){
            let caraqeterString2 = String2.charAt(o).toLowerCase()
            console.log(caraqeterString1, caraqeterString2)
            if(caraqeterString1 == caraqeterString2){
                resute = true
                break
            }else{
                resute = false
            }
        }
        if(!resute){
            return resute
        } 
        
    }
    return resute
   
    
}
console.log(palavraComMesmoCaraqueter('abc','hec'))