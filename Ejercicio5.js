function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  recortar(15,0,10)
}
function recortar(numero,minimo,maximo){
  if(numero < minimo){
    print(minimo)
  } else if (numero > maximo){
    print(maximo)
  } else {
    print(numero)
  }
}
