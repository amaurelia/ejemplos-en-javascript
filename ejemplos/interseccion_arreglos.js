
// intersección de arreglos
// la intersección de dos arreglos es un nuevo arreglo que contiene los elementos que se encuentran en ambos arreglos
// en JavaScript, se puede utilizar el método "filter" para obtener la intersección de dos arreglos

let colores_1 = ["rojo", "verde", "azul", "amarillo", "naranja"];
let colores_2 = ["morado", "rosa", "celeste", "azul", "verde"];

// forma difícil de intersectar dos arreglos sin repetir elementos
let colores_interseccion = [ ]

for(let i = 0; i < colores_1.length; i++) {
    if(colores_2.includes(colores_1[i]) && !colores_interseccion.includes(colores_1[i])) {
        colores_interseccion.push(colores_1[i]);
    }
}
console.log(colores_interseccion);

// forma fácil de intersectar dos arreglos sin repetir elementos utilizando el operador "Set"
let colores_interseccion_2 = [...new Set(colores_1.filter(color => colores_2.includes(color)))];
console.log(colores_interseccion_2);