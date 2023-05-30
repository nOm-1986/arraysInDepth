//It is a method which mutable an array.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

//With numbers
const numbers = [1, 30,4,21,100000];
numbers.sort((a,b) => a - b);
console.log(numbers);
numbers.sort((a,b) => b - a);
console.log(numbers);
const numbers2 = [1, 30,4,21,100000];
numbers2.reverse();
console.log(numbers2);

const words = ['reserve', 'premier', 'communiqué', 'café', 'adieu', 'other'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);

//Sort of objects
const orders = [
    {
        customerName: 'Nicolas',
        total: 500,
        delivered: true,
        date: new Date(2023, 2, 15)
    },
    {
        customerName: 'Fabian',
        total: 330,
        delivered: false,
        date: new Date(2023, 3, 16)
    },
    {
        customerName: 'Adrian',
        total: 1000,
        delivered: true,
        date: new Date(2023, 0, 20)
    },
    {
        customerName: 'Leidy',
        total: 800,
        delivered: false,
        date: new Date(2023, 4, 23)
    },
    {
        customerName: 'María',
        total: 400,
        delivered: false,
        date: new Date(2023, 4, 31)
    },
];
//orders.sort((a,b) => a.total - b.total);
//console.log(orders);
orders.sort((a, b) => {
    return a.date - b.date
});
console.log(orders);

