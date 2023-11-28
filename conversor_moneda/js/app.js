// JS PARA LA COMPROBACIÓN DE LOS DATOS DEL FORMULARIO DE ENTRADA

// Inicialización de variables y objetos
const formConversion=document.getElementById("formConversion");
const euroInput=document.getElementById("euro");
const dolarText=document.getElementById("dolar");
const libraText=document.getElementById("libra");
const pesoText=document.getElementById("peso");
const yenText=document.getElementById("yen");
const yuanText=document.getElementById("yuan");
const error=document.getElementById("error");

// Funciones de evento
function convertirImporte(event){
    // Comprobar euros
    let numeroDecimal=/^(([0-9.]?)*)+$/;
    if(euroInput.value.match(numeroDecimal)){        
        event.preventDefault(); 
        dolarText.value = String(parseInt(euroInput.value) * 1.09) + " $";
        libraText.value = String(parseInt(euroInput.value) * 0.87) + " £";
        pesoText.value = String(parseInt(euroInput.value) * 4382.96) + " $";
        yenText.value = String(parseInt(euroInput.value) * 162.81) + " ¥";
        yuanText.value = String(parseInt(euroInput.value) * 7.80) + " ¥";
        error.innerText = "";
        return true;
    }
    else{
        event.preventDefault(); 
        error.innerText = "ERROR: Introduzca un importe correcto";
        euroInput.focus();
        return false;
    }    
}

// Inicio de carga de eventos
formConversion.addEventListener('submit',convertirImporte);