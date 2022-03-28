
async function startGame(){
    response = await fetch(DOMAIN_URI + "/start")
    .then((res) => res.json()).then((data) => alert(data.text));
}