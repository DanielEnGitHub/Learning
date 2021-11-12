class Persona{
    // Variables en los que unicamente podemos acceder desde la clase
    // Atributos de Clases
    static contadorObjetosPersona = 0;

    // Static Constante
    static get Max_obj(){
        return 5;
    }

    // Atributo Ojetos
    email = "Valor default email";

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        // Contador de objetos Persona
        if(Persona.contadorObjetosPersona < Persona.Max_obj){
            this.idPersona = ++Persona.contadorObjetosPersona;
        }else{
            console.log("Se ha alcanzado el maximo de objetos permitidos");
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }

    // Static: No se utilizan en los objetos que se crean a partir de la clase, unicamente la clase puede utiliar el metodo static
    static saludar(){
        console.log("Hola desde static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() );

console.log(empleado1.toString());

// Error
// console.log(persona1.saludar());

// Utilizar metodo static utilizando la clase
Persona.saludar();

// Utilizar metodo static con parametros
Persona.saludar2(persona1);

console.log(Persona.contadorObjetosPersona);

// Variables no static
console.log(persona1.email)
console.log(empleado1.email)


let persona2 = new Persona('Carla', 'Perez');
let persona3 = new Persona('Diego', 'Contreras');
let persona4 = new Persona('Pedro', 'Muca');
let persona5 = new Persona('Koby', 'Sanic');



console.log(persona1.nombreCompleto())
console.log(empleado1.nombreCompleto())
console.log(persona2.nombreCompleto())
console.log(persona3.nombreCompleto())
console.log(persona4.nombreCompleto())
console.log(persona5.nombreCompleto())