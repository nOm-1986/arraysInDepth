const numbers = [1,30,49,29,10,13,15,48];

const find = numbers.find(item => item == 11);
console.log('find: ', find);
console.log('undefind - no found it: ', find);//When it did not find the element return undefined

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Hamburguer",
        price: 20,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 17,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 15,
        id: '🥞'
    },
]

const pId = products.find(item => item.id === '🍔');
console.log(pId);

//FindIndex - > return the index from the element. Returning -1 if the element does not exist:
const findIndex = products.findIndex(item => item.id === '🥞');
console.log(findIndex);
