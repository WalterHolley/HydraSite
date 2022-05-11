
const playGame = (reqData) => {
  postData(DOMAIN_URI + "play", reqData)
  .then((res) =>{return res;
  })
  .then((res) => {
    updateUI(res);
    if(res.isGameOver){
      processGameOver(res.playerWon)
    }
    else{
      //enable submit button
      document.getElementById("btnSubmit").disabled = false;
    }
  })
};

const startGameSession = (reqData) => {
  postData(DOMAIN_URI + "start", reqData)
  .then((res) => {
    return res;
  })
  .then((res) => {
    updateUI(res);
  })
};

function isRadioSelected(element){
    var result = false;

    for(var i = 0; i < element.length; i++){
      if(element[i].checked){
        result = true;
        break;
      }
    }

    return result;
}

function getRadioValue(element){
    var result = "";

    for(var i = 0; i < element.length; i++){
      if(element[i].checked){
        result = element[i].value;
        break;
      }
    }

    return result;
}


function startGame(){
  var playerName = document.getElementById("playerName").value;
  var difficultySetting = 0;

  let difficulty = document.getElementsByName('difficulty');
  difficulty.forEach((d) => {
    if (d.checked){
      difficultySetting = d.value;
    }
  });

  if(difficultySetting == 0 || playerName.trim() === ""){
    alert("Enter your name and choose a difficulty.");
  }
  else{
    //hide game settings div
    document.getElementById("playerInfoForm").style.display = "none";

    //start game session
    var data = {difficultyCode: difficultySetting, playerName: playerName};
    var result = startGameSession(data);

    //show gameplay div
    document.getElementById("inputDiv").style.display = "block";

  }
}

function clearForm(){
  var action = document.getElementsByName("playerAction");
  var dodge1 = document.getElementsByName("firstDodge");
  var dodge2 = document.getElementsByName("secondDodge");
  var dodge3 = document.getElementsByName("thirdDodge");

  clearRadio(action);
  clearRadio(dodge1);
  clearRadio(dodge2);
  clearRadio(dodge3);

}

function clearRadio(radioElement){
  for(i = 0; i < radioElement.length; i++){
    radioElement[i].checked = false;
  }
}

function doAttack(){
  var action = document.getElementsByName("playerAction");
  var dodge1 = document.getElementsByName("firstDodge");
  var dodge2 = document.getElementsByName("secondDodge");
  var dodge3 = document.getElementsByName("thirdDodge");

  if(!isRadioSelected(action) || !isRadioSelected(dodge1) || !isRadioSelected(dodge2) || !isRadioSelected(dodge3)){
    alert("Please chose a action (Attack or Heal), a first move, second move, and third move");
  }
  else{
    //disable submit
    document.getElementById("btnSubmit").disabled = true;

    var data = {action: getRadioValue(action),
      directionSequence:[getRadioValue(dodge1),
        getRadioValue(dodge2), getRadioValue(dodge3)]};

    //send data to API and wait for results
    playGame(data);


    //clear selections
    clearForm();

  }
}

function sleep(){
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function processGameOver(playerWon){
    document.getElementById("btnSubmit").enabled = false;
    if(playerWon){
      alert("You are victorious!");
    }
    else{
      alert("You've lost, but live to fight another day!");
    }

    //await sleep();
    window.location.href = "leader_board.html";


}

function updateUI(data){

  //Update Messages
  document.getElementById("playerId").innerHTML = document.getElementById("playerName").value;

  //update HP
  document.getElementById("playerHP").innerHTML = data.playerHp;
  document.getElementById("hydraHP").innerHTML = data.enemyHp;

  //check for game over

}


//bind event listeners

//Game start button
document.getElementById("btnStart").addEventListener("click", startGame);
document.getElementById("btnSubmit").addEventListener("click", doAttack);

//Submit Attack plan button
