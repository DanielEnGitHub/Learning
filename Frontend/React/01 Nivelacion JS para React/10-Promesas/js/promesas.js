// FROMA 1 PARA USAR PROMESAS
// const sumar = new Promise( (resolve, reject) =>{
//     return 0;
// } );

// FROMA 2 PARA USAR PROMESAS
const sumar = (a,b) => {
    return new Promise( (resolve, reject) => {
        if (a < 0 || b < 0){
            reject('Esto no es valido');
        }else{
            resolve(a+b);
        }

    });
};

const result = sumar(10, 50)
.then( res => {
    document.write(res);
})
.catch( error => {
    document.write(error);
});

