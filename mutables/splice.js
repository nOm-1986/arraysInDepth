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
a.splice(1,2);
console.log(a);
a.splice(1,1)
console.log(a)
a.splice(-1,-3); //As you can see, you can start with the end but, only delete the last element. It does not matter if you pass a second argument.
console.log(a)
//So far, you notice that the first (arg1) indicate where it needs to start and the second one where to finish including it.

/*
adding elements with splice;
These arguments may be followed by any number of additional arguments that specify
elements to be inserted into the array, starting at the position specified by the first
argument. For example:
let a = [1,2,3,4,5];
a.splice(2,0,"a","b") // => []; a is now [1,2,"a","b",3,4,5]
a.splice(2,2,[1,2],3) // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]
Note that, unlike concat(), splice() inserts arrays themselves, not the elements of
those arrays.

*/

let b = [1,2,3,4,5];
b.splice(2,0,"a","b") // => []; a is now [1,2,"a","b",3,4,5]
console.log(b);
b.splice(2,2,[1,2],3) // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]
console.log(b);
