const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contador = 0; 

  for (const property in objeto) {
    contador++;
  }
  return contador;
};


module.exports = contarPropiedades;
