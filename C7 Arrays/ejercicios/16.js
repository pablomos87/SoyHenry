function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] * i);
  }
  
  return resultado;
  };

  multiplicarElementosPorIndice([1, 2, 3, 4, 5])
  multiplicarElementosPorIndice([0, 0, 0, 0, 0])
  multiplicarElementosPorIndice([2, 4, 6, 8, 10])

module.exports = multiplicarElementosPorIndice;
