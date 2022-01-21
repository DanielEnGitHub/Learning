// Async: indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa);
    // return 'Hola mundo con promesa y async';
}

miFuncionConPromesa();