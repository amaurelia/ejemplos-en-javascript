// objeto con funciones
// en JavaScript, los objetos pueden contener funciones como propiedades, lo que permite que el objeto tenga comportamientos además de datos

let ballena = {
    nombre: "Wally",
    especie: "Ballena Azul",
    edad: 25,
    cantar: function() {
        console.log("Wally está cantando una canción de ballena...");
    },
    saltar: function() {
        console.log("Wally está saltando fuera del agua...");
    },
    informacion: function() {
        console.log("Nombre: " + this.nombre);
        console.log("Especie: " + this.especie);
        console.log("Edad: " + this.edad + " años");
    }
}

// imprimir el objeto completo
console.log(ballena);

// acceder a una propiedad del objeto
console.log(ballena.nombre);
console.log(ballena.especie);
console.log(ballena.edad);  

// llamar a una función del objeto
ballena.cantar();
ballena.saltar();
ballena.informacion(); 
