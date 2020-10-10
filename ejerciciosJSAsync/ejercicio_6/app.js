
const obtenerPersonaFake = require("./library");

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

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(funcionCallback).catch(e => console.log("Error"));;
