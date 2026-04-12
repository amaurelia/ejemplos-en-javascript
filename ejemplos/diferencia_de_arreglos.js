// diferencia de arreglos
// la diferencia de dos arreglos es un nuevo arreglo que contiene los elementos que se encuentran en el primer arreglo pero no en el segundo arreglo
// en JavaScript, se puede utilizar el método "filter" para obtener la diferencia de dos arreglos   

let colores_1 = ["rojo", "verde", "azul", "amarillo", "naranja"];
let colores_2 = ["morado", "rosa", "celeste", "azul", "verde"];

// forma difícil de obtener la diferencia de dos arreglos sin repetir elementos
let colores_diferencia = [ ]
for(let i = 0; i < colores_1.length; i++) {
    if(!colores_2.includes(colores_1[i]) && !colores_diferencia.includes(colores_1[i])) {
        colores_diferencia.push(colores_1[i]);
    }
}
console.log(colores_diferencia);

// forma fácil de obtener la diferencia de dos arreglos sin repetir elementos utilizando el operador "Set"
let colores_diferencia_2 = [...new Set(colores_1.filter(color => !colores_2.includes(color)))];
console.log(colores_diferencia_2);