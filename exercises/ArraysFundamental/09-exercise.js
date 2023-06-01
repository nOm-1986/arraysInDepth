/**
 * Tienes un array de objetos que representan órdenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean
Tu reto es retornar la suma total de todas las órdenes de compra, para solucionarlo vas a encontrar una función llamada calcTotal que recibe un parámetro de entrada:

orders: Un array con las órdenes de compra
Dentro del cuerpo de la función calcTotal debes escribir tu solución.

Ejemplo:

Input:
[
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 20,
    delivered: false,
  }
]

Ouput:
240
 */

const inpu = [
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 20,
      delivered: false,
    },
    {
        customerName: "Fabian",
        total: 65,
        delivered: false,
    }
];

const total = (arr) => {
    return arr.reduce((ac, value) => {
        return ac + value.total
    },0);
}

const result = total(inpu);
console.log(result);
