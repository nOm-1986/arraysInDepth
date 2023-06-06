/**
 * Que se obtiene del siguiente código.
 * 
    const nombres = ['Ana', 'Sofia', 'Carmen', ...['Cris']];
    const [, , , miNombre] = nombres;
    console.log(miNombre['length']);


    Cuando pretendemos hacer una desestructuración de arreglos es súper importante tener en cuenta los índices del mismo. 
    Usando la sintaxis de la , podemos saltar posiciones del arreglo hasta encontrar la propiedad que se desea obtener.
    En el ejemplo usamos 3 veces , por ello saltamos 3 posiciones del arreglo nombres para poder obtener (spread operator) la cadena Cris 
    del arreglo anidado.
    Finalmente aplicamos el método length con sintaxis de corchete.
 * 
 */

const nombres = ['Ana', 'Fabina', 'Karen', ...['Majo']];
const [,,,miNombre] = nombres;
console.log(miNombre['length']);
console.log(algo);
console.log(nombres);


//En la destructuración es importante mantener los indices del mismo.
const arreglo = [1,2,3,4,'cinco'];
const [a,b,c,d,ultima] = arreglo;
console.log(a,b,c); //1,2,3
console.log(ultima);

//Destructurando con comas
const [,,e] = arreglo;
//Como se puede notar no tenemos forma de acceder a los primeros valores, ya que no se declararon.
console.log(e);//3