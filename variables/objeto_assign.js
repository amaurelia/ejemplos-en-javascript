// combinar objetos
// en JavaScript, se pueden combinar dos objetos utilizando el método "Object.assign()"
// el método "Object.assign()" devuelve un nuevo objeto que contiene las propiedades de ambos objetos

const nombre = {
    nombre: "Alvaro",
    apellido: "Maurelia"
}

const trabajo = {
    asignatura: "Programación",
    empresa: "Globant"
}

// en JavaScript, se pueden combinar dos objetos utilizando el método "Object.assign()"
// el método "Object.assign()" devuelve un nuevo objeto que contiene las propiedades de ambos objetos
const persona = Object.assign({}, nombre, trabajo);

// imprimir el nuevo objeto completo
console.log(persona);