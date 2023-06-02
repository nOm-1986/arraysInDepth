/*
Tu reto es retornar Tienes el AS si dentro de array de strings tienes 
la palabra AS y si no tienes el AS entonces deberás retornar un No, tienes el AS, 
para solucionarlo vas a encontrar una función llamada findAs que recibe un parámetro de entrada:

numbers: Un array de strigs con nombres de cartas de Poker.
Dentro del cuerpo de la función findAs debes escribir tu solución.

Ejemplo 1:

Input: ['diamonds', 'hearts', 'spades', 'AS']
Output: 'Tienes el AS'

Ejemplo 2:

Input: ['diamonds', 'hearts', 'spades']
Output:'No, tienes el AS'
*/
const inpu = ['diamonds', 'hearts', 'spades'];

const findAs = (array, term) => {
    const result = array.find(item => item.includes(term));
    if(result) return `Tienes el ${term}`;
    else return `No, tienes el ${term}`;

}

console.log(findAs(inpu, 'AS'));