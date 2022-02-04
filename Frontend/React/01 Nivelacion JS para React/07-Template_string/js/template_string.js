const nombre = "Daniel";
const edad = new Date().getFullYear() - 2000;


// console.log('Bienvenido', nombre, ',tu edad es:', edad);
// !BackTicks
const mensaje = `Bienvenido ${nombre}, tu edad es: ${edad}`.toUpperCase();

document.write(mensaje);