//Concat create a new array.
const elem1 = [1,1,2,2];
const elem2 = [3,3,4,4];
const elem3 = 'Using Strings';

const concating = elem1.concat(elem2);
//console.log(concating);

// When you want to clone an array and does not mutate the original array you can use the spread operator ...elem1, ...elem2, ...
// The coding below shows the way.
const elem4 = [...elem1, ...elem2];
console.log(elem4);

const elem5 = [...elem1, ...elem3];
console.log(elem5)
const elem6 = elem1.concat(elem3);
console.log(elem6);