let promesa = new Promise( resolver => {
    setTimeout( () => resolver('Hola mundo despues de 5 segundos'), 5000 );
});

// Async: indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return 'Hola mundo con promesa y async';
}

miFuncionConPromesa().then( valor => console.log(valor) );