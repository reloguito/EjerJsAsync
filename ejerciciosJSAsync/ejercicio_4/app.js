
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
let nombrePokemon = "pikachu";

obtenerPokemon(nombrePokemon).then((pokemon) => {
    console.log("Pokemon: "+ pokemon.name);
    console.log("Habilidades: ");
    pokemon.abilities.forEach((habilidad) => {
      console.log(habilidad.ability.name);
    });
  }).catch(e => {
    console.log("Error");
});