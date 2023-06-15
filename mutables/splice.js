/**
 * Using SPLICE -> this method mutates the array.
 * Splice() can delete elements from an array, insert new elements into an array,
 * or peform both operations as the same time.
 */
/**
 * 1 - Deleting elemets, array.splice(arg1, ...optionals)
 *    The arg1 must be the index to start deleting, if the second option does not passed
 *    the element will be remove until the end.
 *  */ 
let a = [0,1,2,3,4,5,6,7,8,9];
a.splice(0,2);
console.log(a);
a.splice(1,2)
a.splice(1,1)
console.log(a)
