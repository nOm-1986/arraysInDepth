/*
Tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, 
tu reto es retornar ese array ordenado alfabéticamente por el apellido, 
para solucionarlo vas a encontrar una función llamada sortByLastName que tiene un parámetro de entrada:

array: Un array de strings.
Dentro del cuerpo de la función sortByLastName debes escribir tu solución.

Ejemplo:

Input:
[
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador"
]

Output:
[
  "Juan Amador",
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente"
]
*/

const input = [
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador"
];

const sortByLastName = (arr) => {
    return arr
        .map(item => item.split(' '))
        .sort((a,b) => {
            return  a[1].localeCompare(b[1]) 
        })
        .map(item => [item.join(' ')])
        .flat();
}

const res = sortByLastName(input);
console.log(res);