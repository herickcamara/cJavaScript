// console.log('test')
// console.log((10).toFixed(2))

// console.log(typeof Object)
//modoto caperCase
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
console.log("herick caMara maRIANa ANALIZ".Capcase());

let num =1000
console.log(num.length)