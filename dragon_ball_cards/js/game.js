/*
* JS Para el juego Masterdots
*
*/
//VARIABLES GLOBALES
var iniciadoMarcado=false;
var adyacentes=[];
var idMarcados=[];
var classMarcada;
var tamanoPanel;
var idInterval;

/* INICIALIZACIÓN DEL PANEL */
/**
 * Devuelve un numero random entre 0 y max
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param  {} max
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
/**
 * Funcion que rellena nick y src de avatar
 */
function fillForm(){
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
    tamanoPanel=parseInt(tamano);
}


/*
* MAIN
*/

//Capturamos Datos Usuaio
getUserData();
//Comprobamos los datos
if(!checkUserData()) location="index.html";
//Rellenamos el formulario, panel y eventos
fillForm();
