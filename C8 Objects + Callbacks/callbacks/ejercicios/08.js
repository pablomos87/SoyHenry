const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return "No se encontró el elemento";
};


const array1 = [1, 2, 3, 4, 5];
const callback1 = element => element === 3;
buscarElemento(array1, callback1);

const array2 = [1, 2, 3, 4, 5];
const callback2 = element => element === 6;
buscarElemento(array2, callback2);

const array3 = [];
const callback3 = element => element === 1;
buscarElemento(array3, callback3);

const array4 = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 30},
  {name: 'Bob', age: 40},
];
const callback4 = element => element.age === 30;
buscarElemento(array4, callback4);

module.exports = buscarElemento;
