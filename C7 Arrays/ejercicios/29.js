function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  let minimo = Math.min(...numeros);
  let maximo = Math.max(...numeros);

  for (let i = minimo; i <= maximo; i++) {
    if (!numeros.includes(i)) {
      return i;
    }
  }
  return null;
};

module.exports = encontrarNumeroFaltante;