// =============================================
//   JUEGO SIMPLE DE POKEMON EN JAVASCRIPT
//   Conceptos: objetos, funciones, condicionales, ciclos
// =============================================


// --- OBJETOS: cada Pokemon tiene sus propiedades ---

const charmander = {
    nombre: "Charmander",
    tipo: "fuego",
    hp: 100,
    ataque: 18,
    defensa: 8,
    ataques: ["Llamarada", "Ascuas", "Garra Dragón"]
};

const bulbasaur = {
    nombre: "Bulbasaur",
    tipo: "planta",
    hp: 100,
    ataque: 14,
    defensa: 12,
    ataques: ["Látigo Cepa", "Hoja Afilada", "Drenadoras"]
};


// --- FUNCIONES ---

// Muestra el estado actual de un Pokemon
function mostrarEstado(pokemon) {
    console.log(`${pokemon.nombre} | HP: ${pokemon.hp} | Tipo: ${pokemon.tipo}`);
}

// Calcula el daño de un ataque
function calcularDaño(atacante, defensor) {
    let daño = atacante.ataque - defensor.defensa;

    // Condicional: el daño mínimo siempre es 1
    if (daño < 1) {
        daño = 1;
    }

    return daño;
}

// Elige un ataque al azar del array de ataques
function elegirAtaque(pokemon) {
    let indice = Math.floor(Math.random() * pokemon.ataques.length);
    return pokemon.ataques[indice];
}

// Ejecuta un turno de combate
function atacar(atacante, defensor) {
    let nombreAtaque = elegirAtaque(atacante);
    let daño = calcularDaño(atacante, defensor);

    defensor.hp = defensor.hp - daño;

    // Condicional: el HP no puede bajar de 0
    if (defensor.hp < 0) {
        defensor.hp = 0;
    }

    console.log(`${atacante.nombre} usa ${nombreAtaque} → hace ${daño} de daño`);
}

// Determina el ganador
function anunciarGanador(pokemon1, pokemon2) {
    if (pokemon1.hp <= 0) {
        console.log(`\n¡${pokemon2.nombre} gana la batalla! 🏆`);
    } else if (pokemon2.hp <= 0) {
        console.log(`\n¡${pokemon1.nombre} gana la batalla! 🏆`);
    }
}


// --- BATALLA: ciclo que simula los turnos ---

function iniciarBatalla(pokemon1, pokemon2) {
    console.log("==============================");
    console.log("   ¡COMIENZA LA BATALLA!");
    console.log("==============================\n");

    let turno = 1;

    // Ciclo: sigue mientras ambos tengan HP
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
        console.log(`--- Turno ${turno} ---`);

        atacar(pokemon1, pokemon2);
        mostrarEstado(pokemon2);

        // Condicional: revisar si el combate terminó antes del siguiente ataque
        if (pokemon2.hp <= 0) {
            break;
        }

        atacar(pokemon2, pokemon1);
        mostrarEstado(pokemon1);

        console.log("");
        turno++;
    }

    anunciarGanador(pokemon1, pokemon2);
}


// --- INICIO DEL JUEGO ---

console.log("Pokémon en batalla:");
mostrarEstado(charmander);
mostrarEstado(bulbasaur);
console.log("");

iniciarBatalla(charmander, bulbasaur);
