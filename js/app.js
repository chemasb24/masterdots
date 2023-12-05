// JS PARA LA COMPROBACIÓN DE LOS DATOS DEL FORMULARIO DE ENTRADA

// Inicialización de variables y objetos, DOM
var nickInput;
var tamanoInput;
var emailInput;
var formEntrada;
var error;

// Funciones de evento
function comprobarForm(event){
    // Comprobar cambios
    if(nickInput.value.match(/(?<!\S)[0-9]/)){
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo nick no puede comenzar por un número";
        return false;
    }else if(tamanoInput.value=="0"){
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = "Se debe seleccionar un tamaño de panel";
        return false;
    }
    // Información es correcta
    datosUsuario(nickInput, tamanoInput, emailInput);
    return true;
}

/**
 * Carga de objetos del DOM, comprobaciones y eventos del formulario
 */
function domCargado(){
    // Captura de todos los Elements
    nickInput=document.getElementById("nick");
    tamanoInput=document.getElementById("tamano");
    emailInput=document.getElementById("email");
    formEntrada=document.getElementById("formulario");
    error=document.getElementById("error");

    // Comprobar si hay algún error de juego.html
if(sessionStorage.getItem('error')!=null){
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}
formEntrada.addEventListener('submit',comprobarForm);
}


// Inicio de carga de eventos
document.addEventListener('DOMContentLoaded',domCargado);

//Geolocalización
datoGeolocalizacion();