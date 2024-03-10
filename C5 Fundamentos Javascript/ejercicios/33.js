function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
 
  let i = i > 2;
  if (numero % i === 0 ) {
    return false
} else {
  return true
}
}

esNumeroPrimo(8)
esNumeroPrimo(9)
esNumeroPrimo(10)
esNumeroPrimo(11)

module.exports = esNumeroPrimo;
