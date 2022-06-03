// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter(v => v[0]=="e")); // TODO [ 'elite', 'exuberant']


// Usa el método filter para filtrar las palabras que empiezan por vocal
// BONUS: Usa una expresión regular!

console.log(words.filter(v => v[0].match(/[aeiou]/gi))); // TODO [ 'elite', 'exuberant', 'away']
