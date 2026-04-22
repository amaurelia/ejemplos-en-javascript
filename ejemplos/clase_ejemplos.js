// parámetros por defecto
// función flecha
// interpolación de cadenas
// destructuración de objetos
// spread operator
// rest operator
// sets y maps
// función de funciones


const obtenerSueldoLiquido = (sueldoBruto, descuentos = 0) => sueldoBruto - descuentos;

let sueldoCarlos = obtenerSueldoLiquido(1000, 120);
let sueldoFrancisco = obtenerSueldoLiquido(1500);
let sueldoRoxana = obtenerSueldoLiquido(2000, 300);
let sueldoDiego = obtenerSueldoLiquido(2500, 500);

let sueldos = new Map();
sueldos.set("Carlos", sueldoCarlos);
sueldos.set("Francisco", sueldoFrancisco);
sueldos.set("Roxana", sueldoRoxana);
sueldos.set("Diego", sueldoDiego);  

console.log("Sueldos líquidos:");
console.log(sueldos);

console.log(`El sueldo líquido de Carlos es: ${sueldos.get("Carlos")}`);


/*
console.log(`El sueldo líquido de Carlos es: ${sueldoCarlos}`);
console.log(`El sueldo líquido de Francisco es: ${sueldoFrancisco}`);
console.log(`El sueldo líquido de Roxana es: ${sueldoRoxana}`);
console.log(`El sueldo líquido de Diego es: ${sueldoDiego}`);*/