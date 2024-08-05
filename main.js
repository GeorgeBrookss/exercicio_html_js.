document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

let numero1 = Number(document.getElementById('NumeroA').value);
let numero2 = Number(document.getElementById('NumeroB').value);


    if(numero2 > numero1){
        alert('numero valido')
    }else{
        alert('numero invalido')
    }
});