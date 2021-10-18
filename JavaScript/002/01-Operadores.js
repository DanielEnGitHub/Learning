// Operador Ternario
let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 110;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar"; 
console.log( resultado );

// * Sintaxis
// * IF
let num = 2;

if( num == 1 ){
    console.log("Número uno");
}else if( num == 2 ){
    console.log("Número dos");
}else if( num == 3 ){
    console.log("Número tres");
}else if( num == 4 ){
    console.log("Número cuatro");
}else{
    console.log("Número desconocido");
}

// * SWITCH
let mes = 11;
let estacion = 'Estación desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion);

// * WHILE
let contador = 0;
/*
while( contador < 3 ){
    console.log(contador);
    contador++;
}
*/
do{
    console.log(contador);
    contador++;
}while(contador < 3);
console.log("Fin ciclo do while");

// * FOR
for(let contador = 0; contador < 3 ; contador++ ){
    console.log(contador);
}
console.log("Fin ciclo for");

// BREAK: rompe un ciclo
// CONTINUE: ignora alguna condicion que impida la continuacion de un ciclo o sentencia

// * FOR IN
const autos = ['BMW','Mercedes Benz','Volvo'];
for (variable in autos){
    console.log(autos[variable]);
}

// * ETIQUETAS
inicio:
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contador);
}