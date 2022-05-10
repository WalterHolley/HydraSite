
const response = getData(DOMAIN_URI + 'scores')
.then((res) => {return res;});


function createRow(name, difficulty, rounds){
  var table = document.getElementById("leaderboardTable");
  var row = table.insertRow(1);
  var nameCell = row.insertCell(0);
  var diffCell = row.insertCell(1);
  var roundsCell = row.insertCell(2);

  nameCell.innerHTML = name;
  diffCell.innerHTML = difficulty;
  roundsCell.innerHTML = rounds;

}

function getDifficultyString(code){
  var result;

  switch(code){
    case 1:
      result = "Easy";
      break;
    case 2:
      result = "Medium";
      break;
    case 3:
      result = "Hard";
    default:
      result = "U L T R A";
  }

  return result;
}
const rows = () => {
  response.then((res) => {
    if(res.highScores.length){
      for(i = res.highScores.length - 1; i >= 0; i--){
        createRow(res.highScores[i].playerName, getDifficultyString(res.highScores[i].difficulty), res.highScores[i].rounds);
      }
    }
  });
};

rows();
