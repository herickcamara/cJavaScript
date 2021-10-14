console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//add um metodo na funçao string 
String.prototype.reverce = function(){
    return this.split('').reverse().join('')
}
String.prototype.palimetro = function(){
    if(this == this.reverce()){
        return true
    }else{
        return false
    }
}
console.log('herick'.palimetro(), 'ana'.palimetro(), 'lil'.palimetro())

//add  um metodo na funçao Array
Array.prototype.first = function(){ 
    return this[0]
}
console.log([1,2 ,3,4,5].first())



String.prototype.Capcase = function () {
    let s = this.split(" ");
    let arr = [];
    let t = [];
  
    for (let a = 0; a < s.length; a++) {
      let A = s[a];
      t = [];
  
      for (let b = 0; b < A.length; b++) {
        if (b == 0) {
          let p = A[0][0].toUpperCase();
  
          t.push(p);
        } else if (A.length > 0) {
          p = A[b].toLowerCase();
          t.push(p);
        }
      }
      let copercase = t.join("");
      arr.push(copercase);
    }
    // stringName[0][0].toUpperCase()
    const strr = arr.toString().replace(/,/gi, ' ');
    return strr
  }

