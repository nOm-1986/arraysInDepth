const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
const newProduct = [...products];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Creating a new Array without modificating the original array.
const productIndex = products.findIndex(item => item.id === '🥞');
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    newProduct.splice(productIndex, 1); //Splice -> Elimina un elemento del array, o varios, el segundo parámetro indica la cantidad de elementos a ser eliminados.
}

//Otra solución: Utilizando filter.
const resul = products.filter(item => item.id !== '🍔');

console.log("products", products);
console.log("newProducts", newProduct);
console.log("myProducts", myProducts);
console.log("filtering", resul);
console.log("-".repeat(10));

// Another exercise
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'An amazing taste'
    }
};

const produtIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[produtIndexV2] = {
    ...productsV2[produtIndexV2],
    ...update.changes
}


console.log("-".repeat(10));
console.log("produtIndexV2", productsV2);
console.log("-".repeat(10));


