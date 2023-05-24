const words = ['spray', 'limit', 'elite', 'exuberant', 'huge','breathtaking'];

//As you can see, filter does that its name says. As same as map it is unmutable.
const rta = words.filter(item => item.length >= 5);
console.log(rta);


//We can use complex filters as well.
const orders = [
    {
        customerName: 'Fabian',
        total: 50,
        delivered: true,
    },
    {
        customerName: 'Liseth',
        total: 60,
        delivered: false,
    },
    {
        customerName: 'María',
        total: 100,
        delivered: false,
    },
    {
        customerName: 'Leidy',
        total: 80,
        delivered: false,
    },
    {
        customerName: 'Adrian',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Majo',
        total: 230,
        delivered: true,
    },
];
//Filter orders where delivered are true.
// const rta2 = orders.filter(item => item.delivered == false);
// console.log(rta2)

// const rta3 = orders.filter(item => item.delivered && item.total >= 100);
// console.log(rta3)

const query = (query) => {
    return orders.filter(item => item.customerName.includes(query) && item.delivered == true)
}
console.log(query('Ma'));