
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(chiste=>{
    console.log(chiste[0].setup);
    console.log(chiste[0].punchline);
}).catch(e => console.log("Error"));;
