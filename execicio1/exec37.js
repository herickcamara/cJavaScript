function inicioFim(inicio, fim) {
    
    if (inicio > fim) {
    let meio = inicio;
    inicio = fim;
    fim = meio;
    for (let i = 0; i < fim; i++) {
      if (i % 2 != 0) {
        console.log(`numero impar : ${i}`)
      }
    }
  }else if (inicio == fim) {
    console.log("ambos valore são igais");
  }else if (inicio < fim) {
    for (let i = 0; i < fim; i++) {
      if (i % 2 == 1) {
        console.log(`numero impar : ${i}`)
      }
    }
  }
}
let n1 = 0,
  n2 = 100;
inicioFim(n2, n2)
