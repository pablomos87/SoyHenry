function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let resultado = "";
   let i = texto.length - 1;
 
   while (i >= 0) {
     resultado += texto[i];
     i--;
   }
   return resultado;
 }

 
 module.exports = invertirTexto;