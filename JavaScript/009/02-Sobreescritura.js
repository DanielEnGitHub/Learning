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
}

let empleado1 = new Empleado('Pablo', 5000);
console.log(empleado1.obtenerDetalle());

let gerente1 = new Gerente('Sistemas', 'Daniel', 4500);
console.log(gerente1.obtenerDetalle());

imprimir(empleado1);
