// JS PARA LA COMPROBACIÓN DE LOS DATOS DEL FORMULARIO DE ENTRADA

// Inicialización de variables y objetos, DOM
const formEntrada=document.getElementById("formulario");
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const emailInput=document.getElementById("email");
const error=document.getElementById("error");

// Comprobar si hay algún error de juego.html
if(sessionStorage.getItem('error')!=null){
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}

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

// Inicio de carga de eventos
formEntrada.addEventListener('submit',comprobarForm);

//Geolocalización
datoGeolocalizacion();