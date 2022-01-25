function sumar(){
    let valor1 = document.getElementById('valor1').value;
    let valor2= document.getElementById('valor2').value;

    let resultado = document.getElementById('resultado');

    
    console.log(valor1);
    if(valor1 == '' && valor2 == ''){
        resultado.innerHTML = `Resultado: No existen valores para realizar la suma`;
    }else if( valor1 == '' ){
        resultado.innerHTML = `Resultado: El primer valor no puede quedar vacion`;
    }else if(valor2 == ''){
        resultado.innerHTML = `Resultado: El segundo valor no puede quedar vacion`;
    }else{
        resultado.innerHTML = `Resultado: ${Number(valor1)+Number(valor2)}`;
    }

    
}