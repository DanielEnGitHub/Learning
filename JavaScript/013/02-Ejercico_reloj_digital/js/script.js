let numeros = document.getElementById('reloj');
let fechaDia = document.getElementById('fecha');

const reloj = () => {
    let fecha = new Date();
    let hr = formatohora(fecha.getHours());
    let min = formatohora(fecha.getMinutes());
    let seg = formatohora(fecha.getSeconds());
    numeros.innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    fechaDia.innerHTML = fechaTexto;

}

const formatohora = (x) => {
    if (x < 10){
        x = `0${x}`;
    }
    return x;
}

setInterval(reloj, 1000);