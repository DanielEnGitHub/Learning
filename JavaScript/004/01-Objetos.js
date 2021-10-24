//^ CREAR UN OBJETO
let persona = {
    nombre: 'Daniel',
    apellido: 'Gil',
    email: "daniel@gmail.com",
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

// Acceder a los objetos
console.log(persona.nombre)
console.log(persona.email)
console.log(persona)
console.log(persona.nombreCompleto())

// Un objeto tiene distintos atributos y metodos


//^ CREAR UN OBJETO DE MANERA EXPLICITA (no esla fomra mas comun)
let persona2 = new Object();
persona2.nombre = "Pablo";
persona2.telefono = "4564-6454";
persona2.pais = "México";


//^ FORMAS PARA ACCEDER A LOS OBJETOS
console.log(persona2['nombre']);
console.log(persona2.nombre);

for (x in persona2){
    console.log(x);
    console.log(persona2[x]);
}


//^ ADMINISTRAR ATRIBUTOS DE LOS OBJETOS
// Agregar nuebo atributo
persona.pais = "Argentina";
console.log(persona);

// Editar atributo existente
persona.nombre = "Guillermo";
console.log(persona);

// Eliminar atributo de un objeto
delete persona.pais;
console.log(persona);


//^ OTRA MANERA DE IMPRIMIR LOS OBJETOS
let personaArray = Object.values(persona);
console.log(persona)

let personaString = JSON.stringify(persona);
console.log(personaString)