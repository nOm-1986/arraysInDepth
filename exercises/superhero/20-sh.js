const emojis = ['✨', '🥑', '😍'];
emojis.map((x) => x + '✨');
emojis.filter((x) => x !== '🥑');
emojis.find((x) => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
console.log(emojis);
emojis.splice(1, 2, '✨');
console.log(emojis);

/**
 * Respuesta Correcta: D) splice
splice es un método mutable de arreglos capaz de agregar, eliminar o reemplazar los items.

El resto de los métodos son usados mucho en programación funcional y por ende son inmutables.
 */