
//graphics
const PLAYER_IMAGE_SRC = "./img/star_platinum.jpg";
const ENEMY_IMAGE_SRC = "./img/ui_shaggy.jpg";
const DEFAULT_STARTING_HP = 5;


//TODO: add a style that gets rid of the margin around the canvas
//const ctx = canvas.getContext('2d');
async function startGame(){
    response = await fetch(DOMAIN_URI + "/start")
    .then((res) => res.json()).then((data) => alert(data.text));
}

class Player {
  constructor(name, hp, imageSrc){
    this.hp = hp;
    this.name = name;
    this.img = imageSrc;
  }


}

var player;
var enemy;

// Starts the battle!
function startBattle(playerName){
    player  = new Player(playerName, DEFAULT_STARTING_HP, PLAYER_IMAGE_SRC);
    enemy = new Player("Hydra",DEFAULT_STARTING_HP, ENEMY_IMAGE_SRC);

}

function playGame(){

}

//==========BATTLE SCENE====================================
class BattleScene extends React.Component{
  
}

//==========PLAYER INPUT====================================
class PlayerInput extends React.Component{
  handlePlayerActionSubmit(e){
    e.preventDefault();
  }

  handleGameInfoSubmit(e){
    e.preventDefault();
    startBattle(e.target.playerName.value);
    //collect difficulty and send start game call

    //transition to game
  }

  getPlayerDodges(){
    return(
      <form onSubmit={this.handlePlayerActionSubmit}>
        <label>
        <input type="radio" name="firstAction" value="1" />
        Dodge Left
        </label>
        <label>
        <input type="radio" name="firstAction" value="2" />
        Dodge Right
        </label>
      </form>
    );
  }

  getPlayerAction(){
    return(
      <form onSubmit={this.handlePlayerActionSubmit}>
      <label>
        <input type="radio" name="playerAction" value="1" />
        Attack
      </label>
      <label>
      <input type="radio" name="playerAction" value="2" />
      Heal
      </label>
      </form>
    );
  }

  getGameInfo(){
    return(
      <form onSubmit={this.handleGameInfoSubmit}>
      <label>
      Name
      <input type="text" name="playerName" />
      </label>
        <input type="radio" id="easy" name="difficulty" value="1" />
        <label for="easy">Easy</label>
        <input type="radio" id="medium" name="difficulty" value="2" />
        <label for="medium">Medium</label>
        <input type="radio" id="hard" name="difficulty" value="3" />
        <label for="hard">Hard</label>
        <input type="submit" value="Go Forth" />
      </form>
    );
  }


}

//=============BASE GAME===============
class Game extends React.Component{
  render(){
    const input = new PlayerInput()
    return(
      <div>
        <div className="game-screen">{input.getGameInfo()}</div>
        <div className="game-text-area"></div>
      </div>
    )
  }
}

//=============MAIN RENDER==============
const root = ReactDOM.createRoot(document.getElementById("gameRoot"));
root.render(<Game />);
