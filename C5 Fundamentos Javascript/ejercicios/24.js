function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:

  if (typeof x === 'number' && typeof y === 'number') {
    return (x / y);
  } else {
    return 'Error: los valores deben ser números.';
  }
};

module.exports = divide;