function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   let elementosLetraA = []

   for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].charAt(0).toLowerCase() === 'a') {
         elementosLetraA.push(arrayOfStrings[i])
      }
   }
   return elementosLetraA;
};

module.exports = filter;
