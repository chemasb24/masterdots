/*
* JS Checks input form data
*
* @author Chema Sánchez <csanchez@barnatic.es>
*/

// Variable initialization
var nickInput;
var levelInput;
var cardsInput;
var formInput;
var avatarItems;
var itemImg;
var avatarCont;

// Event functions
/**
 * Checks correct data in form input
 */
function checkForm(event){
    // Check input data
    if(nickInput.value.match(/(?<!\S)[0-9]/))
    {
        nickInput.focus();
        event.preventDefault();
        error.innerText="Nickname can't start with a number";
        return false;
    }
    // Data OK
    saveUserData(nickInput,levelInput,cardsInput,avatarCont);
    return true;
}
function movingImg(event){
    itemImg=event.target;
    console.log(itemImg.src);
}
function changeImg(event){
    avatarCont.src=itemImg.src;
}
/**
 * DOM and event loading
 */
function domLoaded(){
    // Get all elements
    nickInput=document.getElementById("nick");
    levelInput=document.getElementById("level");
    cardsInput=document.getElementById("cards");
    formInput=document.getElementById("formInput");

    formInput.addEventListener('submit',checkForm);
    
    // Drag and drop events
    avatarItems=document.getElementsByClassName("avatarImgItem");
    for(let item of avatarItems){
        item.addEventListener('dragstart',movingImg);
    }
    avatarCont=document.getElementById("avatarImg");
    avatarCont.addEventListener('dragover',e=>{e.preventDefault();});
    avatarCont.addEventListener('drop',changeImg);
}

// Starts event loading
document.addEventListener('DOMContentLoaded',domLoaded);