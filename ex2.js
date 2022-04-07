// map

// Utiliza el método map para devolver un nuevo array indicando la posición de cada uno de los elementos del array original con el siguiente formato: ['{índice de la posición que ocupa el elemento}-elemento']. Pista: la función de callback de .map puede recibir más de un parámetro...

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// Casi todos los métodos de array pueden recibir 2 parámetros. El primero siempre es el elemento sobre el que estamos iterando, el segundo, el índice que ocupa en el array
let resultado = colors.map((s, index) => index + '-' + s);

console.log(resultado); // ['0-Blue', '1-Green', '2-Red', '3-Orange', '4-Violet', '5-Indigo', '6-Yellow']