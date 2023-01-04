function calcularTabuada() {
  let tabuada = document.getElementById("tabuada").value;
  let quantidade = document.getElementById("quantidade").value;
  quantidade = +quantidade;
  let quantreal = quantidade + 1;
  let resp = document.getElementById("resp");
  for (let i = 1; i < quantreal; i++) {
    let resultado = tabuada * i;
    console.log(`${tabuada}  X  ${i} = ${resultado}`);
    resp.innerHTML += `<p>${tabuada} X ${i} = ${resultado}`;
  }
}
