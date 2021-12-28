// *FUNCION NORMAL
let miFuncion = function(a, b){
    return a+b;
}

console.log('La suma es: '+ miFuncion(50,20));

// *ARROW FUNCTION (No funcina el concepto de HOSTING)

// const miFuncionFlecha = (a,b) => {
//     return a+b;
// }

const miFuncionFlecha = (a,b) => a+b;
console.log(miFuncionFlecha(50,50));

const saludar = () => 'Saludos desde funcion flecha';
console.log(saludar());

// TRABAJANDO CON OBJETOS (se coloca entre parentesis para evirar confuciones)
const obj = () => ({'nombre': 'Juan'});
console.log(obj())
