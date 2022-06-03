// Tenemos un array de peces y queremos saber si Nemo está en el
let peces = ["Pitusa", "Nemi", "Burbujitas"];


let existeNemo = peces.some(comprobarPez);
console.log("Existe el pez? ", existeNemo);

function comprobarPez(pez) {
    // Tenemos que devolver true cuando queramos seleccionar el elemento en concreto
    return pez == "Nemo";
}


// tenemos un array de personas. las personas son objetos, que tienen nu nombre y una edad. Dime si existe alguna persona que sea mayor de edad
let personas = [{
    nombre: "Pedro",
    edad: 14
}, {
    nombre: "Paula",
    edad: 18
}];


let existeAlguienMayorEdad = personas.some(p => p.edad >= 18);
console.log("Hay alguna persona mayor de edad? ", existeAlguienMayorEdad);

let primeraPersonaQueseaMayorDeEdad = personas.find(p => p.edad >= 18);
console.log("Dame la primera persona que sea mayor de edad ", primeraPersonaQueseaMayorDeEdad);

// comidas y calorias

let comidas = [{
    nombre: "manzana",
    calorias: 23
}, {
    nombre: "croissant",
    calorias: 230
}, {
    nombre: "yogur",
    calorias: 130
}, {
    nombre: "platano",
    calorias: 77
}, {
    nombre: "yogur coco",
    calorias: 130
}];

// filter
// Dame todas las comidas que tengan más de 50 calorias. Este método devuelve un array
let comidasCaloricas = comidas.filter(c => c.calorias > 50);
console.log("comidas caloricas: ", comidasCaloricas);

// map
// A partir del array de comidas, creame otro array que contenga un array de números con el número de carácteres de cada una de las comidas [7, 9, 5]
let caracteresComidas = comidas.map(c => c.nombre.length);
console.log("carácteres de las comidas", caracteresComidas);

// sort
// Sirve para ordenar un array. 
let nombres = ["Sara", "Fabian", "Andreu"];

console.log(nombres.sort())

// sort más complejos
// ordename las comidas de menos a más calorias
comidas.sort((c1, c2) => {
    // si para ti c1<c2 (tiene que ir antes en el array, más al principio); tenemos que devolver un -1
    if (c1.calorias < c2.calorias) {
        // me tengo que quedar con c1
        return -1;
    }

    if (c1.calorias > c2.calorias) {
        // tengo que ponger c2 más adelante del array
        return 1;
    }

    return 0;
});

console.log("Comidas ordenadas: ", comidas);