// ejemplo de condicional anidado
// se pueden anidar condicionales dentro de otros condicionales para evaluar múltiples condiciones
a = 3
b = 5
c = 10

if(a < b) {
    if(b < c) {
        console.log("a es menor que b y b es menor que c");
    }
    else {
        console.log("a es menor que b pero b no es menor que c");
    }
}
else {
    console.log("a no es menor que b");
}