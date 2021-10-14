//criando a funçao map b
Array.prototype.map2 = function(callback){
        newArray = []
        for(let i = 0;i < this.length; i++){
            newArray.push(callback(this[i], i, this))
        }
        return newArray
}