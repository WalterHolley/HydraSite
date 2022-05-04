
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


  }


}

function doAttack(){
  var action = document.getElementsByName("playerAction");
  var dodge1 = document.getElementsByName("firstDodge");
  var dodge2 = document.getElementsByName("secondDodge");
  var dodge3 = document.getElementsByName("thirdDodge");

  if(action == "" || dodge1 == "" || dodge2 == "" || dodge3 == ""){
    alert("Please chose an action, ")
  }
}


//bind event listeners

//Game start button
document.getElementById("btnStart").addEventListener("click", startGame);

//Submit Attack plan button
