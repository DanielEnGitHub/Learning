// Su funcion es similar al call con la ligera diferencia al momento de usar parametros

// USO DEL APPLY SIN PARAMETROS
// let persona = {
//     nombre: 'Juan',
//     apellido: 'Perez',
//     nombreCompleto: function(){
//         return this.nombre + " " + this.apellido;
//     }
// }

// let persona2 = {
//     nombre: 'Carlos',
//     apellido: 'Lara'
// }

// // Uso del call
// console.log(persona.nombreCompleto()); // Vamos a utilizar la funcion que solo existe en el objeto persona llamado nombre completo

// console.log( persona.nombreCompleto.apply( persona2 ) ); // Como vemos el metodo nombre completo no existe en el objeto persona2 y por medio de apply podemos acceder a ella desde otro objeto


// USO DEL APPLY CON PARAMETROS
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(telefono){
        return this.nombre + " " + this.apellido + ", " + telefono;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso del call
console.log(persona.nombreCompleto('7974654654')); // Vamos a utilizar la funcion que solo existe en el objeto persona llamado nombre completo

console.log( persona.nombreCompleto.apply( persona2, ['4654654'] ) ); // Como vemos el metodo nombre completo no existe en el objeto persona2 y por medio de call podemos acceder a ella desde otro objeto
