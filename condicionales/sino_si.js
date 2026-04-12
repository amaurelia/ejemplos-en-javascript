// condicionales con "sino si" (else if)
// en JavaScript, se puede utilizar la estructura "else if" para evaluar múltiples condiciones
// si la primera condición no se cumple, se evalúa la siguiente condición, y así sucesivamente hasta que se cumpla una condición o se llegue al final de la estructura

edad = 20
if(edad < 18) {
    console.log("Eres menor de edad");
}
else if(edad >= 18 && edad < 65) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres adulto mayor");
}