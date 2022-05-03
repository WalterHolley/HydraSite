
//graphics
const PLAYER_IMAGE_SRC = "./img/star_platinum.jpg";
const ENEMY_IMAGE_SRC = "./img/ui_shaggy.jpg";
const DEFAULT_STARTING_HP = 5;

//elements


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
function startBattle(playerName, difficulty){
    player  = new Player(playerName, DEFAULT_STARTING_HP, PLAYER_IMAGE_SRC);
    enemy = new Player("Hydra",DEFAULT_STARTING_HP, ENEMY_IMAGE_SRC);

}

function drawGameScreen(){
  return(
    <img src={ENEMY_IMAGE_SRC} />
  )
}

//==========BATTLE SCENE====================================
class BattleScene extends React.Component{

}

//==========PLAYER INPUT====================================
class PlayerInput extends React.Component{
  constructor(props){
    super(props);
    this.handlePlayerActionSubmit = this.handlePlayerActionSubmit.bind(this);
    this.handleGameInfoSubmit = this.handleGameInfoSubmit.bind(this);
    this.handlePlayerDodgesSubmit = this.handlePlayerDodgesSubmit.bind(this);
  }

  handlePlayerActionSubmit(e){
    e.preventDefault();
  }

  handleGameInfoSubmit(e){
    e.preventDefault();


      if(startBattle(e.target.playerName.value, e.target.difficulty.value)){
          this.setState({gameText: this.getPlayerAction(), gameScreen: drawGameScreen()});
      }


    //transition to game
  }

  handlePlayerDodgesSubmit(e){
    e.preventDefault();

  }

  getPlayerDodges(){
    return(
      <form onSubmit={this.handlePlayerDodgesSubmit}>
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
//=============GAME SCREEN=============
class GameScreen extends React.Component{

}

//=============BASE GAME===============
class Game extends React.Component{

  initGameScreen(){
    this.setState({gameScreen: })
  }
  var playInput = new PlayerInput();
  this.setState({gameScreen: input.getGameInfo()});
  this.setState({gameText: })

  render(){

    return(
      <div>
        <div className="game-screen">{this.state.gameScreen}</div>
        <div className="game-text-area">{this.state.gameText}</div>
      </div>
    )
  }
}

//=============MAIN RENDER==============
const root = ReactDOM.createRoot(document.getElementById("gameRoot"));
root.render(<Game />);
