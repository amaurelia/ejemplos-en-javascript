// Ejemplo de map en JavaScript
// map crea un nuevo arreglo aplicando una función a cada elemento

const numeros = [1, 2, 3, 4, 5];

// Duplicar cada número
const duplicados = numeros.map(num => num * 2);
console.log("Originales:", numeros);
console.log("Duplicados:", duplicados);

// Convertir nombres a mayúsculas
const nombres = ["ash", "misty", "brock"];
const mayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas:", mayusculas);

// Obtener solo los nombres de una lista de objetos
const pokemones = [
    { nombre: "Pikachu", tipo: "Eléctrico" },
    { nombre: "Charmander", tipo: "Fuego" },
    { nombre: "Squirtle", tipo: "Agua" }
];

const nombres_pokemon = pokemones.map(pokemon => pokemon.nombre);
console.log("Nombres de pokemones:", nombres_pokemon);
