
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
const funcionCallback = (persona) => {
    persona.results.forEach((person) => {
      console.log("Nombre: " + person.name.title +". " + person.name.first +" "+ person.name.last);
      console.log("Genero: "+ person.gender);
      console.log("Pais: "+ person.location.country);
      console.log("Estado: "+ person.location.state);
      console.log("Ciudad: "+ person.location.city);
      console.log("Calle: " + person.location.street.name +" " + person.location.street.number);
      console.log("Telefono: " + person.phone);
      console.log("Celular: " + person.cell);
      console.log("Email: " + person.email);
      console.log("Nombre de Usuario: " +person.login.username);
      console.log("Contraseña: " + person.login.password);
    });
  };


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
