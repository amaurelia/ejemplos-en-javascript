
let charmander = {
    nombre: "Charmito",
    tipo: "fuego",
    hp: 100,
    ataque: 18,
};
let bulbasaur = {
    nombre: "Pepito",
    tipo: "planta",
    hp: 100,
    ataque: 14,
};
function mostrarEstado(pokemon) {
    console.log(`${pokemon.nombre} | HP: ${pokemon.hp} | Tipo: ${pokemon.tipo}`);
}
function estaVivo(pokemon) {
    console.log(`${pokemon.nombre} está vivo`);
    return pokemon.hp > 0;
}
function atacar(atacante, defensor) {
    console.log(`${atacante.nombre} ataca a ${defensor.nombre}`);
    defensor.hp -= atacante.ataque;
}
mostrarEstado(bulbasaur);
estaVivo(bulbasaur)
atacar(charmander, bulbasaur);
mostrarEstado(bulbasaur);





