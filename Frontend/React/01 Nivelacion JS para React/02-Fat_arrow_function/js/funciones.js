// Funciones

// FUNCION SIN RETURN
function sumar(a,b){
    document.write(a+b);
}

sumar(10,5);

// FUNCION CON RETURN
function sumarConReturn(a,b){
    return (a+b);
}

const resultado = sumarConReturn(10,5);
document.write(resultado);

// ARROW FUNCTION
// const sumarArrow = (a,b) => {
//     return (a+b);
// }
const sumarArrow = (a,b) => a+b;

document.write(sumarArrow(10,50));