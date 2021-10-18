let a = 3, b = 2;

// Suma
let z = a + b;
console.log("Resultado de la suma: " + z );

// Resta
z = a - b;
console.log("Resultado de la resta: " + z);

// Multiplicacion
z = a * b;
console.log( "Resultado de la mult:" + z);

// Division
z = a / b;
console.log( "Resultado de la division:" + z);

// Resiudio
z = a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo):" + z);

// Exponente
z = a ** b;
console.log( "Resultado de operador exponente:" + z);


// !!!!!!!!!!!!!!!!!!!!!!!!
//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z = --a;
console.log(a);
console.log(z);

//Postdecremento
z = b--;
console.log(b);
console.log(z);


// !!!!!!!!!!!!!!!!!!!!!!!!

let r = 1;

r += 3; // a = a + 3
console.log(r);

r -= 2; // a = a - 2
console.log(r);

/*
*=
/=
%=
**=
*/

// !!!!!!!!!!!!!!!!!!!!!!!!

let x = 2, y = 4;

let comp = x == y; // se revisa el valor sin importar el tipo
console.log(comp);

z = a === y;// revisa los valores pero tambien los tipos
console.log(z);

comp = x != y; // se revisa el valor sin importar el tipo
console.log(comp);

z = a !== y;// revisa los valores pero tambien los tipos
console.log(z);