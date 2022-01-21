// Promesas, Async, Await & SetTimeout

async function miFuncion(){
    console.log('Inicio de la promesa');
    let promesa = new Promise( resolver => {
        setTimeout( () => resolver('Hola mundo despues de 5 segundos'), 5000 );
    } );
    console.log('Fin de la promesa');

    console.log( await promesa);
}

miFuncion();