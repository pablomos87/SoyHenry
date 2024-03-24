function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  if  (typeof numero !== 'number' || numero < 1 || numero > 7) {
    return "No es un dia de la semana";
  } else {
    let diasDeLaSemana = [
      'Lunes',
      'Martes',   
      'Miercoles',
      'Jueves',        
      'Viernes',      
      'Sabado',                
      'Domingo'              
     ];
     let dia = diasDeLaSemana[numero - 1];
  return dia.charAt(0).toUpperCase() + dia.slice(1);
}
};

module.exports = obtenerDiaSemana;