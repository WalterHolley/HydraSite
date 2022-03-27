
function startGame(){
    response = await fetch(DOMAIN_URI + "/start");
    alert(response);
}