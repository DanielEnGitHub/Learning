// SUMAR TODOS LOS ARGUMENTOS DE UNA FUNCION
let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log( resultado );

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}

// INICIANDO CON OBJETOS

const persona = {
    nombre: 'Paola',
    apellido: 'Gea',
    genero: 'Femenino',
    pais: 'Venezuela'
}

function cambiarDatos(p1){
    p1.nombre = "Carla";
    p1.apellido = "Gimenez";
}

cambiarDatos(persona);

console.log(persona);