/*
* JS User Data Management
*
* @author Chema Sánchez <csanchez@barnatic.es>
*/

var nick;
var level;
var cards;
var avatarImg;

//sessionStorage
function saveUserData(nick, level, cards, avatarCont) {
    sessionStorage.setItem('nick',nick.value);
    sessionStorage.setItem('level',level.value);
    sessionStorage.setItem('cards',cards.value);
    sessionStorage.setItem('avatarImg',avatarCont.src);
    sessionStorage.setItem('score',0);
}
/**
 * Gets sessionStorage data
 */
function getUserData(){
    nick = sessionStorage.getItem('nick');
    level = sessionStorage.getItem('level');
    cards = sessionStorage.getItem('cards');
    avatarImg = sessionStorage.getItem('avatarImg');
}

/**
 * Checks nick in sessionStorage
 */
function checkUserData(){
    if(nick==null){
        sessionStorage.setItem('error','Input form not filled correctly');
        return false;
    }
    return true;
}