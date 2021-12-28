class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalle(){
        return `Nombre: ${this.nombre} || Sueldo: ${this.sueldo}`;
    }
}


class Gerente extends Empleado{
    constructor(departamento, nombre, sueldo){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    // Se sobreescribio la funcion obtener detalle
    obtenerDetalle(){
        return `${super.obtenerDetalle()} || Departamento: ${this.departamento}`;
    }
}

// POLIMORFISMO
function imprimir(a){
    console.log(a.obtenerDetalle());

    // *instnceof
    // Verifica si a es una instancia de Empleado
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Pablo', 5000);
console.log(empleado1.obtenerDetalle());

let gerente1 = new Gerente('Sistemas', 'Daniel', 4500);
console.log(gerente1.obtenerDetalle());

imprimir(empleado1);
