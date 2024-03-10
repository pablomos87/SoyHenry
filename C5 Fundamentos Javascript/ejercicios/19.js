function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

  if (num % 1 !== 0) {
    return 'El valor introducido no es un número entero.';
  } else if (num === 0) {
    return false;
  } else if (num > 0) {
    return 'Es positivo';
  } else {
    return 'Es negativo';
  }
};

module.exports = esPositivo;