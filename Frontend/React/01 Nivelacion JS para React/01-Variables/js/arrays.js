const numeros = [1,2,3,4,5,6,7,8,9,10];

document.write('<h2>ARRAYS</h2>')
for (numero in numeros){
    document.write('<br>'+numero);
}

document.write('<h2>MAP</h2>')
numeros.map((numero, i) => {document.write('<br> Indice:'+i+' '+numero) });

// ARRAY DESTRUCTURING
const [usuario1, , usuario3] = ['Daniel', 'Pablo', 'Cesar', 'Yostin', 'Selvin'];
document.write('<br><br>'+usuario1);
// document.write('<br>'+usuario2);
document.write('<br>'+usuario3);
