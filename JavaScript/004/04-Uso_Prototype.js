function Persona(nombre, apellido, emial){
    this.nombre = nombre;
    this.apellido = apellido;
    this.emial = emial;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = '568997987' // Crea un nuevo atributo para el objeto persona

let padre = new Persona("Raul", "Gil", "raul@gmail.com");
padre.tel = '746987654'
console.log(padre.tel)

let madre = new Persona("Maria", "Hernandez", "maria@gmail.com");
console.log(madre.tel) //Esto se resuelve con el uso de Prototype

