const numbers = [1,2,3,4,5];

//The second param should be the initial status. In this case acumulador is equal to 0.
const rta = numbers.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log(rta)