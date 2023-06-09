/*
Tienes un array de números entre positivos y negativos, 
tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.

Para solucionarlo vas a encontrar una función llamada filterUnique que tiene un parámetro de entrada:

array: Un array de números.
Dentro del cuerpo de la función filterUnique debes escribir tu solución.

Ejemplo 1:

Input: [3, 3, 2, 2, 1, 1]
Output: [1, 2, 3]

Ejemplo 1:

Input: [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
Output: [ -3, -1, 1, 2, 4, 45 ]
*/
const input = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];

const filterUnique = ( arr ) => {

    const newArr = [...arr];
    newArr.sort((a,b) => {
        return a - b
    });
    return [...new Set(newArr)];

}

console.log(filterUnique(input));
console.log(input);