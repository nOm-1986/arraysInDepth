/**
 * Tienes un array de objetos que representan datos de personas con los siguientes atributos:

name: string
lastName: string
age: number
Tu reto es retornar un array de strings con solo los nombres, para solucionarlo vas a encontrar una 
función llamada getNames que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función getNames debes escribir tu solución.
Input:
[
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  {
    name: 'Zulema',
    lastName: 'Vicente',
    age: 21
  },
]

Output:
['Nicolas', 'Valentina', 'Zulema']
 */

const input = [
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  {
    name: 'Zulema',
    lastName: 'Vicente',
    age: 21
  },
]

const output = (element) => {
    return element.map(item => item.name);
}

console.log(output(input));