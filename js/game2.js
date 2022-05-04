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

function doAttack(){
  var action = document.getElementsByName("playerAction");
  var dodge1 = document.getElementsByName("firstDodge");
  var dodge2 = document.getElementsByName("secondDodge");
  var dodge3 = document.getElementsByName("thirdDodge");

  if(!isRadioSelected(action) || !isRadioSelected(dodge1) || !isRadioSelected(dodge2) || !isRadioSelected(dodge3)){
    alert("Please chose an action, a first move, second move, and third move");
  }
  else{
    alert("ok");
    //disable submit

    //send data to API and wait for results

    //clear selections

    //update UI


  }
}

function processGameOver(){

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
