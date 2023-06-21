const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];
const myLifeSummedUp2 = {'a':"😀",'b':"😁", 'c':"😂", 'd':"🤣"};


for (let item in myLifeSummedUp) {
    console.log(item); //🤔?
}

for (let item of myLifeSummedUp) {
    console.log(item); //🤔?
}

for (let item in myLifeSummedUp2) {
    console.log(item); //🤔?
}
  
for (let item of myLifeSummedUp2) {
    console.log(item); //🤔?
}

/**
 * Respuesta Correcta: A) 0 1 2 3 y "☕" "💻" "🍷" "🍫"
Con el bucle for-in, podemos iterar sobre propiedades enumerables. Los enumerables en el arreglo son justamente sus índices. Por ello es 0 1 2 3.

Con un bucle for-of, podemos recorrer iterables. Un arreglo por definición es un iterable, en cada iteración la variable item es igual al elemento sobre el cual se itera en ese momento. Por ello es "☕" "💻" "🍷" "🍫".

En la practica los bucles for-of son más usados y ocacionalmente los bucles for-in.
 */