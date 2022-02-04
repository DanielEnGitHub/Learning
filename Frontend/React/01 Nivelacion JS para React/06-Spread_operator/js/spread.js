const frutas = ["Manzand", "Fresa", "Banano", "Naranja"];
const frutasAcidas = ["Limon", "Lima", "Mandarina Limon"];

document.write(frutas);
document.write(frutasAcidas)

// UNE 2 O MAS ARRAY Y LOS CONVIERTE EN 1
const nuevo = [...frutas, ...frutasAcidas];
document.write('<br>'+nuevo);