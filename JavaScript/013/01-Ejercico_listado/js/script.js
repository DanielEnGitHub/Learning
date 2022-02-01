let id = 0;

const agregarDatos = () => {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');

    if (nombre.value == '' && apellido.value == ''){
        nombre.focus();
        nombre.style.borderColor = 'red';
        apellido.style.borderColor = 'red';

    }else if (apellido.value == ''){
        apellido.focus();
        apellido.style.borderColor = 'red';
        nombre.style.borderColor = '';

    }else if(nombre.value == ''){
        nombre.focus();
        nombre.style.borderColor = 'red';
        apellido.style.borderColor = '';

    }else{
        id = id + 1;
        nombre.style.borderColor = '';
        apellido.style.borderColor = '';

        // Cuerpo de la tabla
        let tblBody = document.getElementById('bodyTable');
        
        // Creamos tr de la tabla
        var hilera = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode(id);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        
        var celda1 = document.createElement("td");
        var textoCelda1 = document.createTextNode(nombre.value);
        celda1.appendChild(textoCelda1);
        hilera.appendChild(celda1);

        var celda2 = document.createElement("td"); // Creamos el elemento td en el DOM
        var textoCelda2 = document.createTextNode(apellido.value); // Agregamos nombre al contenido de la tabla
        celda2.appendChild(textoCelda2); // Creamos elemento hijo a la celda
        hilera.appendChild(celda2); // Creamos elemento hijo a la hilera
        
        tblBody.appendChild(hilera); // Creamos el nuvo contenido en el DOM
    }

}