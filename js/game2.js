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
      difficultySetting = d;
    }
  });

  if(difficultySetting == 0 || playerName.trim() === ""){
    alert("Enter your name and choose a difficulty.");
  }
  else{
    //hide game settings div
    document.getElementById("playerInfoForm").style.display = "none";

    //start game session

    //show gameplay div
    document.getElementById("inputDiv").style.display = "block";

    updateUI();
  }
}

function fakeResult(){
  if(Math.floor(Math.random() * 2)){
    return true;
  }

  return false;
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
    var playerHP = document.getElementById("playerHP").innerHTML;
    var enemyHP = document.getElementById("hydraHP").innerHTML;
    //disable submit

    //send data to API and wait for results
    if(fakeResult()){
      if(getRadioValue(action) == 1){
        enemyHP = enemyHP - 1;
      }
      else{
        playerHP = playerHP + 1;
      }
    }
    else{
      playerHP = playerHP - 1;
    }

    //clear selections
    clearForm();

    if(playerHP == 0){
      processGameOver(false);
    }
    else if (enemyHP == 0) {
      processGameOver(true);
    }

    //update UI
    document.getElementById("playerHP").innerHTML = playerHP;
    document.getElementById("hydraHP").innerHTML = enemyHP;


  }
}

function sleep(){
  return new Promise(resolve => setTimeout(resolve, 5000));
}

async function processGameOver(playerWon){
    document.getElementById("btnSubmit").enabled = false;
    if(playerWon){
      alert("You are victorious!");
    }
    else{
      alert("You've lost, but live to fight another day!");
    }

    await sleep();
    window.location.href = "leader_board.html";


}

function updateUI(){

  //Update Messages
  document.getElementById("playerId").innerHTML = document.getElementById("playerName").value;

  //update HP
  document.getElementById("playerHP").innerHTML = 5;
  document.getElementById("hydraHP").innerHTML = 5;

  //check for game over

}


//bind event listeners

//Game start button
document.getElementById("btnStart").addEventListener("click", startGame);
document.getElementById("btnSubmit").addEventListener("click", doAttack);

//Submit Attack plan button
