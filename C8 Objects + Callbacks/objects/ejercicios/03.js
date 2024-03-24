const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto
}

  const obj = { name: "John", age: 30 };
  agregarNuevaPropiedad(obj, "city", "New York");
 

module.exports = agregarNuevaPropiedad;
