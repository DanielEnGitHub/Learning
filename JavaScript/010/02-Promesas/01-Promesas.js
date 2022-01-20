// Utilizando las promesas
let miPromesa = new Promise( (resolved, rejected) => {
    let expresion = false;

    if (expresion == true){
        resolved('Se resolvio correctamente');
    }
    else{
        rejected('Ocurrio algun error');
    }
});

// Sintaxis 1
miPromesa.then( valor => console.log(valor), error => console.log(error) );

// Sintaxis 2
miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));