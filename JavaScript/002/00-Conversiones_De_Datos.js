let miNumero = "18";
 //console.log(typeof miNumero);
 
// Convertir String a Number
 let edad = Number(miNumero);
 //console.log(typeof edad);

 if(edad >= 18){
	 console.log("Puede votar");
 }
 else{
	 console.log("Muy joven para votar");
 }
 
 let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
 console.log( resultado );
 
 
let z = isNaN(resultado);

console.log(z);
