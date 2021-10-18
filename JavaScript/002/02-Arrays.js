// * ARRAYS
//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos[0]); // Acceder a un elemento de un arreglo
console.log(autos);

// Modificar elementos de un arreglo
autos[1] = 'MercedesBenz'
console.log(autos);

// Agregar elementos a un arreglo
autos.push('Audi')
console.log(autos);

// Preguntar si es un array
console.log( Array.isArray(autos) )

console.log( autos instanceof Array )