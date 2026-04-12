// ciclo for anidado
// se pueden anidar ciclos for dentro de otros ciclos for para iterar sobre múltiples dimensiones

for( let i = 0; i < 10; i++) {
    console.log("i:" + i);
    for(let j = 0; j < 5; j++) {
        console.log("    j:" + j);
    }
}