// LET te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.
// VAR define una variable global o local en una función sin importar el ámbito del bloque.
// CONST te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando y su valor no puede ser modificado.

// *VAR
document.write(nombre);
var nombre = 'Pedro';
document.write(nombre);


// *CONST
const x = 50;
// x = 10 **************ERROR


// *LET
// console.log(y); ****************ERROR
let y = 10;
console.log(y);