// Funcion de tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function suma(a,b,imprimir){
    let total = a+b;
    imprimir(total);
}

suma(5,8,imprimir);

// Llamadas asincronas con uso de la funcion SetTimeout 
function miFuncionCallBack(){
    console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallBack, 3000);

setTimeout( () => console.log("Saludo asincrono"), 10000 );

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

// Se ejecuta a cada cierto tiempo
setInterval(reloj, 1000);