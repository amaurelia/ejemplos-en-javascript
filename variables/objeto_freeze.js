// objeto freeze
// en JavaScript, el método "Object.freeze()" se utiliza para congelar un objeto, lo que significa que no se pueden modificar sus propiedades ni agregar nuevas propiedades al objeto

const nombre = {
    nombre: "Alvaro",
    apellido: "Maurelia"
}

let persona = Object.freeze(nombre);

persona.nombre = "Seba";
persona.apellido = "Gonzalez";

// el método "Object.freeze()" congela un objeto, lo que significa que no se pueden modificar sus propiedades ni agregar nuevas propiedades al objeto
console.log(persona);