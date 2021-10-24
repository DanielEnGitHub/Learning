//^ METODO CONSTRUCTOR EN OBJETOS
function Persona(nombre, apellido, emial){
    this.nombre = nombre;
    this.apellido = apellido;
    this.emial = emial;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Raul", "Gil", "raul@gmail.com");
console.log(padre)

let madre = new Persona("Maria", "Hernandez", "maria@gmail.com");
console.log(madre)

console.log(padre.nombreCompleto())


//^ DISTINTAS DORMAS DE CREAR OBJETOS
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miArreglo = new Array();
let miArreglo2 = [];

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miFuncion = new function(){};
let miFuncion2 = function(){};