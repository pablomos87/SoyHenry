function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let multiplicacion = 1;
  for (let i = a; i <= b; i++ ) {
  multiplicacion = multiplicacion * i } 
    return (multiplicacion)
};

module.exports = productoEntreNúmeros;