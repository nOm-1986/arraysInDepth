/**
 * Tu reto en este desafío es buscar si ese string tiene un término de búsqueda dado, 
 * por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true 
 * de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, 
 * así el término de búsqueda sea mayúscula o minúscula.

Para solucionarlo vas a encontrar una función llamada checkInString que recibe dos parámetros de entrada:

text: Un string
term: Un string con el término a buscar
Dentro del cuerpo de la función checkInString debes escribir tu solución.

Ejemplo 1:

Input: "Ana lava la tina", "ana"
Output: true

Ejemplo 2:

Input: "Santiago", "tiago"
Output: true

Ejemplo 3:

Input: "Nicolas", "ana"
Output: false
 */
const inp = "Santiago";

const include = (text, term) => {
    return text.toLowerCase().includes(term.toLowerCase());
}

const result = include(inp, 'ago');
console.log(result);

