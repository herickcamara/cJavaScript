const contador= (caracter, string)=>{
    const Caracter = new Array()
    for(let i = 0; i< string.length;i++){
        if(caracter === string[i])Caracter.push(string[i])
    }
    console.log(Caracter.length)
}
contador('h','herick hecles HERO heroi')