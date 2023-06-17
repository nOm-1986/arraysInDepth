const one = true || {} || null;
const two = null || 'hello' || '';
const three = 0 || [] || true;
console.log(one, two, three);


const fab1 = 0 || false || false || '' || {};
console.log(fab1);
/*
  Respuesta Correcta: B) true "hello" []
  Con el operador || "OR", devolvemos el primer valor booleano verdadero "true", si todos los valores son falsos, se devuelve el último valor de la sentencia.

  En la constante one: (true || {} || null); su primer valor es verdadero, por lo tanto, retorna true.

  En la constante two: (null || "hello" || ""); null es un valor falso "false", la cadena "hello" es un valor verdadero "true", por lo tanto, retornará la cadena "hello" y no evaluará más condiciones.

  En la constante three: (0 || [] || true); el valor 0 es un valor falso "false", mientras que el arreglo "array" vacío es un valor verdadero "true", por lo tanto retornaría el arreglo vacío.

  Entonces, la salida de este código sería: (true, "hello", []);
*/

/* 
  JS THE DEFINITIVE GUIDE BY David Flanagan
  Chapter 3.9 Type Conversion.


  Value                     to String         to Number         to Boolean
  undefined                 "undefined"       NaN               false
  null                      "null"            0                 false
  true                      "true"            1
  false                     "false"           0
  "" (empty string)                           0                 false
  "1.2" (nonempty, numeric)                   1.2               true
  "one" (nonempty, non-numeric)               NaN               true
  0                         "0"               0                 false
  -0                        "0"                                 false
  1 (finite, non-zero)      "1"                                 true
  Infinity                  "Infinity"                          true
  -Infinity                 "-Infinity"                         true
  NaN                       "NaN"                               false
  {} (any object)           see §3.9.3        see §3.9.3        true
  [] (empty array)          ""                0                 true
  [9] (one numeric element) "9"               9                 true
  ['a'] (any other array)   use join()method  NaN               true
  function(){}(any func)    see §3.9.3        NaN               true
*/