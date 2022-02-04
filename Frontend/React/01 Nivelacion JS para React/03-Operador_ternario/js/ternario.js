const cuenta = 2000;

// IF NORMAL
// let mensaje = '';

// if(cuenta <= 0) mensaje = 'No tienes saldo';
// else mensaje = 'Tienes saldo';

// OPERADOR TERNARIO
const mensaje = cuenta < 0 ? "No tienes saldo": "Tienes saldo";
document.write(mensaje);

const mensaje2 = cuenta > 100 && "Hola";
document.write(mensaje2);
