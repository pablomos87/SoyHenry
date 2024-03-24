function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let resultado = []
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      resultado.push (array[i].toUpperCase());  
}
};
return resultado
};

module.exports = convertirStringAMayusculas;
