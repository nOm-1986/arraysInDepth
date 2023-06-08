const num = parseInt("7*3",10);
console.log(num); //7

let b,c,d,e,f,g,h;
b = parseInt('101',2);
console.log(b);
c = parseInt('101',3);
console.log(c);

/*parseInt convierte un valor a tipo number 
de una base concreta (base binaria, octal, decimal, etc).

Si vamos a la documentación oficial encontraremos los siguientes ejemplos: 

Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

Sintaxis: parseInt(string, base);
    Parámetros
    * string
    Una cadena que representa el valor que se desea convertir.

    * base
    Un entero que representa la base de la mencionada cadena.
    La función parseInt comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada. Por ejemplo, una base de 10 indica una conversión a número decimal, 8 octal, 16 hexadecimal, y así sucesivamente. Para bases superiores a 10, las letras del alfabeto indican numerales mayores que 9. Por ejemplo, para números hexadecimales (base 16), se utiliza de la A hasta la F.

    Si parseInt encuentra un carácter que no es un numeral de la base especificada, lo ignora a él y a todos los caracteres correctos siguientes, devolviendo el valor entero obtenido hasta ese punto. parseInt trunca los números en valores enteros. Se permiten espacios anteriores y posteriores.

    Si no se especifica la base o se especifica como 0, JavaScript asume lo siguiente:

    Si el parámetro cadena comienza por "0x", la base es 16 (hexadecimal).
    Si el parámetro cadena comienza por "0", la base es de 8 (octal). Esta característica está desaconsejada.
    Si el parámetro cadena comienza por cualquier otro valor, la base es 10 (decimal).
    Si el primer carácter no se puede convertir en número, parseInt devuelve NaN.
*/
//Ejemplos documentación - Todods los siguientes devuelven 15:
console.log( parseInt('F', 16) );
console.log( parseInt('17' , 8) );
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);

//todos los siguientes ejemplos devuelven NaN:
parseInt("Hello", 8); // No es un número en absoluto
parseInt("0x7", 10);  // No es de base 10
parseInt("546", 2);   // Los dígitos no son válidos para representaciones binarias.

//Incluso aunque la base especificada es diferente, todos los siguientes ejemplos devuelven 17 ya que el argumento cadena comienza por "0x".
parseInt("0x11", 16);
parseInt("0x11", 0);
parseInt("0x11");




