
const obtenerPokemon = require("./library");
let nombrePokemon = "bulbasaur";

// Codigo funcion callback

function funcionCallback(pokemon){
    console.log("Pokemon: " + pokemon.name);
    console.log("Habilidades: ");
    pokemon.abilities.forEach(habilidad => {
        console.log(habilidad.ability.name);
    });

}


// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon(nombrePokemon, funcionCallback);
