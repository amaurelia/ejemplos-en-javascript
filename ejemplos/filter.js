// Ejemplo de filter en JavaScript
// filter crea un nuevo arreglo con los elementos que cumplen una condición

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar solo los números pares
const pares = numeros.filter(num => num % 2 === 0);
console.log("Todos:", numeros);
console.log("Pares:", pares);

// Filtrar números mayores a 5
const mayoresA5 = numeros.filter(num => num > 5);
console.log("Mayores a 5:", mayoresA5);

// Filtrar pokemones por tipo
const pokemones = [
    { nombre: "Pikachu", tipo: "Eléctrico" },
    { nombre: "Charmander", tipo: "Fuego" },
    { nombre: "Squirtle", tipo: "Agua" },
    { nombre: "Raichu", tipo: "Eléctrico" },
    { nombre: "Vulpix", tipo: "Fuego" }
];

const tipeFuego = pokemones.filter(pokemon => pokemon.tipo === "Fuego");
console.log("Pokemones de tipo Fuego:", tipeFuego);

// Filtrar palabras con más de 4 letras
const palabras = ["sol", "luna", "estrella", "mar", "montaña"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log("Palabras con más de 4 letras:", palabrasLargas);
