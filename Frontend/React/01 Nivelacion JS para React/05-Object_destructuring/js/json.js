const Usuario = {
    nombre: "Julian",
    apellido: "Gutierrez",
    edad: 23,
    email: "juliangutierrez@email.com"
}

document.write("<h2>Sin destructuring</h2>");
document.write("<p>"+Usuario.nombre+"<p>");
document.write("<p>"+Usuario.apellido+"<p>");
document.write("<p>"+Usuario.edad+"<p>");
document.write("<p>"+Usuario.email+"<p>");

// APLICANDO DESTRUCTURING
const {nombre, apellido, edad, email} = {
    nombre: "Julian",
    apellido: "Gutierrez",
    edad: 23,
    email: "juliangutierrez@email.com"
}

document.write("<h2>Aplicando destructuring</h2>");
document.write("<p>"+nombre+"<p>");
document.write("<p>"+apellido+"<p>");
document.write("<p>"+edad+"<p>");
document.write("<p>"+email+"<p>");