// ! HOISTING: LLAMAR A LA FUNCION ANTES O DESPUES DE CREARLA
// Declaracion de la funcion

//^ FUNCION BASICA
function miFuncion(a, b){ // lo que esta entre parentecis se les llama parametros, dependiendo de los requerimientos se utlizaria en las funciones
    console.log(arguments.length); // Nos devuelve el numero de parametros que tiene la funcion (OJO solo se puede utilizar dentro de una funcion)
    console.log("Suma: "+(a + b))
}

// Instanciar una fucnion
miFuncion(50,20);


//^ FUNCIONES CON RETURN
// APLICANDO HOISTING
console.log("Suma: "+ funcionConReturn(50,30))

function funcionConReturn(a, b){
    return a + b;
}


//^ FUNCIONES DE TIPO EXPRECION
let x = function (a,b){return a+b}; // Se agrega ; porque se esta trabajando en una sola linea

console.log("Suma: " + x(10,10));


//^ FUNCIONES DE TIPO SELF INVOKING; funcion que se llama a sí misma, es una funcion anonima

(function(){
    console.log("Ejecutando la funcion");
})(); // Esta funcion no se podra reutilizar

(function(a,b){
    console.log("Ejecutando la funcion " + (a+b));
})(10,20); // Esta funcion no se podra reutilizar


//^ FUNCIONES FLECHA
let arrow = (a,b) => a+b; // No es necesario escribir la palabra return para retornar valores
console.log(arrow(10,20))

// ! PARAMETRO: (a,b)
// ! ARGUMENTOS: miFuncion(10,20)


// PRACTICANDO CON FUNCIONES
let sumar = function (a = 5, b = 6){ // Valores por default
    console.log(arguments[0]); // Solo imprime el primer valor porque el segundo no se especifico al momento de llamar la funcion
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
};

let resultado = sumar(10,20,50);
console.log(resultado)

// La cantidad de argumentos no siempre tiene que concidir con la cantidad de parametros