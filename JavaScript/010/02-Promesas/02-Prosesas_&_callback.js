let promesa = new Promise (resolver => {
    console.log('Inicio promesa');
    setTimeout( ()=> resolver('Hola despues de 5 segundos'), 5000);
    console.log('Fin promesa');
});

promesa.then(valor => console.log(valor))