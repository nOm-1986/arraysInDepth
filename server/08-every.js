// With EVERY each element of the array must satisfy the condition. Return true or false.
const numbers = [8,5,6,4,15,3,2,1,6,8,5,2,1,9,6,8,7,20,30,40];

const rta = numbers.every(item => item <= 40);
console.log(rta);

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 15,
    }
];

const reto = team.every(t =>  t.age > 16);
console.log(reto);

