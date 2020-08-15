var arreglo = [1, 2, 3, 4]

function setup() {
  createCanvas(400, 400);
  rotar(4)
}


function rotar(k) {
  for (var x = 0; x < k; x++) {
    arreglo.unshift(arreglo.pop())
  }
  print(arreglo)
}
