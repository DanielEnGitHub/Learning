// CLASE PADRE
class Persona{
    // Contador para objetos creados
    static contador = 0;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contador;
    }

    // GETTERS
    get idPersona(){
        return this._idPersona;
    }
    
    get nombre(){
        return 'Nombre: ' + this._nombre;
    }

    get apellido(){
        return 'Apellido: ' + this._apellido;
    }

    get edad(){
        return 'Edad: ' + this._edad;
    }

    // SETTERS
    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return 'ID: ' + this._idPersona + ' | Nombre Completo: ' + this._nombre + ' ' + this._apellido + ' | Edad: ' + this._edad;
    }

}


// CLASE EMPELEADO EXTEND PERSONA
class Empleado extends Persona{
    static contadorEmpelado = 1;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = Empleado.contadorEmpelado++;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        return this._sueldo;
    }

    toString(){
        return 'ID: ' + this._idEmpleado + ' | Nombre Completo: ' + this._nombre + ' ' + this._apellido + ' | Edad: ' + this._edad + ' | Sueldo: '+ this._sueldo;
    }
}

// CLASE CLIENTE EXTEND PERSONA
class Cliente extends Persona{
    static contadorClinete = 1;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = Cliente.contadorClinete ++;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro;
    }

    toString(){
        return 'ID: ' + this._idCliente + ' | Nombre Completo: ' + this._nombre + ' ' + this._apellido + ' | Edad: ' + this._edad + ' | Fecha Registro: ' + this._fechaRegistro;
    }
}

let fecha = new Date(2020,11,17);

let persona1 = new Persona('Daniel', 'Gallina', 20);
let empleado1 = new Empleado('Selvin', 'Acual', 16, 2000);
let cliente1 = new Cliente('Yostin', 'Tejaxun', 20, fecha)

persona1.edad = 20;
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());

