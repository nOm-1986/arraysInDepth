/**
 * En este desafío recibirás dos arrays de números como parámetros de entrada y debes 
 * retornar un array que tenga los dos arrays unidos, para solucionarlo vas a encontrar 
 * una función llamada mergeArrays que recibe dos parámetros de entrada:

arrayA: Un array
arrayB: Un array
Dentro del cuerpo de la función mergeArrays debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5 , 6]

Ejemplo 2:

Input: ["A", "B", "C"], ["D", "E", "H"]
Output: ["A", "B", "C", "D", "E", "H"]
*/
//Para este ejercicio existen dos posibles soluciones la primera es utilizando spread operator y la otra es con concat.

//Utilizando spread operator.
const spreadArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

console.log(spreadArrays(in1, in2));

const in1 = [1, 2, 3];
const in2 = [4, 5, 6];
//Segunda solución utilizando concat
const concatArrays = (in1, in2) => {
    return in1.concat(in2);
}
console.log(in1);
console.log(concatArrays(in1,in2));
console.log(in1);
console.log(in2);