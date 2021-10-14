const array = new Array(1,'ola',8,'2','1d')
const array1 = new Array('ola','2','1d')
const filtroNumber = (element)=>{
    const neArray = []
    element.forEach(valor=>{
        if(typeof valor == typeof 0) neArray.push(valor)

    })
    console.log(neArray)
}
filtroNumber(array)
filtroNumber(array1)