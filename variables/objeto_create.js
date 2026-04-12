// crear un nuevo objeto a partir de otro objeto utilizando Object.create()
// en JavaScript, se puede crear un nuevo objeto a partir de otro objeto utilizando el método "Object.create()"
// el nuevo objeto tendrá las mismas propiedades que el objeto original, pero con valores diferentes

persona = {
    nombre: "Alvaro",
    apellido: "Maurelia",
    edad: 30,
    asignatura: "Programación"
}

// crear un nuevo objeto a partir de otro objeto
// el nuevo objeto tendrá las mismas propiedades que el objeto original, pero con valores diferentes
let profesor = Object.create(persona);
profesor.nombre = "Seba";
profesor.apellido = "Gomez";
profesor.edad = 25;
profesor.asignatura = "Matemáticas";

// imprimir el nuevo objeto completo
console.log(profesor);

// acceder a una propiedad del nuevo objeto
console.log(profesor.nombre);
console.log(profesor.apellido);
console.log(profesor.edad);
console.log(profesor.asignatura);
