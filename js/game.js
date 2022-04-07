const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 600;

//graphics
const PLAYER_IMAGE_SRC = "./img/star_platinum.jpg";
const ENEMY_IMAGE_SRC = "./img/ui_shaggy.jpg";



//TODO: add a style that gets rid of the margin around the canvas
const canvasContext = canvas.getContext('2d');
async function startGame(){
    response = await fetch(DOMAIN_URI + "/start")
    .then((res) => res.json()).then((data) => alert(data.text));
}

class Player {
  constructor(x,y, hp, imageSrc){
    this.hp = hp;
    this.x = x;
    this.y = y;
    this.img = imageSrc;
  }




  draw(x, y, imageSrc){
    //player graphics
    var playerImage = new Image();

    playerImage.onload = function(){
      canvasContext.drawImage(playerImage, x, y);
    }
    playerImage.src = imageSrc;


  }
}
player = new Player(300,300,5, PLAYER_IMAGE_SRC);
enemy = new Player(600, 0, 5, ENEMY_IMAGE_SRC);
player.draw(player.x, player.y, player.img);
enemy.draw(enemy.x, enemy.y, enemy.img);
