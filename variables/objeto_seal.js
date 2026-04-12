// objeto sellado
// en JavaScript, el método "Object.seal()" se utiliza para sellar un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, pero sí se pueden modificar las propiedades existentes

const nombre = {
    nombre: "Alvaro",
    apellido: "Maurelia"
}

// objeto original
console.log(nombre);

let persona = Object.seal(nombre);
persona.nombre = "Seba";
persona.apellido = "Gonzalez";

// el método "Object.seal()" sella un objeto, lo que significa que no se pueden agregar nuevas propiedades al objeto, pero sí se pueden modificar las propiedades existentes
console.log(persona);

persona.edad = 30; // no se puede agregar una nueva propiedad al objeto
console.log(persona);
