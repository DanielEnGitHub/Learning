// Callback: En El parametro de una funcion se llama a otra funcion del cual podemos llamar a otra funcion

// foo (x, function()){
//     callback function
// }

function miFuncion1(){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2");
}

miFuncion1();
miFuncion2();

// Funcion de tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function suma(a,b,imprimir){
    let total = a+b;
    imprimir(total);
}

suma(5,8,imprimir);