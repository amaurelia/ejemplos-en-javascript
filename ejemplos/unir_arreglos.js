// unir dos arreglos sin repetir elementos
// en JavaScript, los arreglos se representan con el tipo de dato "array"
// un arreglo es una colección de elementos, que pueden ser de cualquier tipo de dato

let colores_1 = ["rojo", "verde", "azul", "amarillo", "naranja"];
let colores_2 = ["morado", "rosa", "celeste", "azul", "verde"];

// forma difícil de unir dos arreglos sin repetir elementos
let colores_unidos = [ ];
// recorrer el primer arreglo y agregar los elementos al nuevo arreglo si no están repetidos
for(let i = 0; i < colores_1.length; i++) {
    if(!colores_unidos.includes(colores_1[i])) {
        colores_unidos.push(colores_1[i]);
    }
}
// recorrer el segundo arreglo y agregar los elementos al nuevo arreglo si no están repetidos
for(let i = 0; i < colores_2.length; i++) {
    if(!colores_unidos.includes(colores_2[i])) {
        colores_unidos.push(colores_2[i]);
    }
}
//  imprimir el nuevo arreglo con los colores unidos sin repetir elementos
console.log(colores_unidos);

// forma fácil de unir dos arreglos sin repetir elementos utilizando el operador "Set"
// el operador "Set" es una estructura de datos que permite almacenar valores únicos, es decir, sin repetir elementos
let colores_unidos_2 = [...new Set([...colores_1, ...colores_2])];
console.log(colores_unidos_2);