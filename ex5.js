// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

// Conocías el método de string 'startsWith' ? Devuelve un boleano
console.log(words.filter(word => word.startsWith('e'))); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal
// BONUS: Usa una expresión regular!

console.log(words.filter((word) => {
    // El string contiene alguno de estos carácteres, y además, acepto que esté en minúsculas o mayúsculas. Y después, que venga lo que sea.
    const regexp = new RegExp('^[aeiou].*', 'i');

    // Fijáte que aquí SI necesito poner el return; porque la función ocupa más de una línea. Devolvemos un boleano indicando si la palabra cumple la expresión regular (empezar por vocal)
    return regexp.test(word);

})); // TODO [ 'elite', 'exuberant', 'away']
