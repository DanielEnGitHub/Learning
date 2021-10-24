// let persona = {
//     nombre: 'Daniel',
//     apellido: 'Gil',
//     email: "daniel@gmail.com",
//     edad: 20,
//     nombreCompleto: function(){
//         return this.nombre + " " + this.apellido;
//     }
// }

//^ GET: establece un metodo a un objeto sin necesidad de utlizar la palabra function
let persona = {
    nombre: 'Daniel',
    apellido: 'Gil',
    email: "daniel@gmail.com",
    edad: 20,
    idioma: 'es_gua',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){ // Nos sirve para modificar algun metodo
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombreCompleto)
console.log(persona.lang)

persona.lang = 'en'

console.log(persona.lang)
//^ SET: