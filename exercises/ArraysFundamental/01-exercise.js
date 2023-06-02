/**
 * Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.
Ejemplo 1:
Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]
 */

const numbers = [2, 4, 5, 6, 8];

const multiplyElements = (elements) => {
    return elements.map(item => item * 2);
}

const output = multiplyElements(numbers);
console.log(output);