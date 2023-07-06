'use strict';

function myFunction() {
  return (pi = 3.1416);
}

console.log(myFunction());

/**
 * Respuesta Correcta: A) ReferenceError
 * Recuerda que el use strict o modo estricto de JS nos ayuda a escribir código seguro, habilitando restricciones a nuestro código.
 * En myFunction() no vamos a poder usar variables no declarada como es el caso de "pi". 
 */