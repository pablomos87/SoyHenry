function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0;

  for (let i = 1; i <= n; i++) {
  suma = suma + i } 
    return (suma)
  };

  sumarHastaN(5)
  sumarHastaN(10)
  sumarHastaN(1)
  sumarHastaN(0)
  sumarHastaN(100)
  
module.exports = sumarHastaN;
