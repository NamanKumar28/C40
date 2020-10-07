var canvas, backgroundImage, car1, car2, car3, car4, cars;

var gameState = 0;
var playerCount;

var database;

var form, player, game, allPlayers;

function preload(){
  track = loadImage("images/track.png")
  backgroundImage = loadImage("images/ground.png")
  car1Image = loadImage("images/car1.png")
  car2Image = loadImage("images/car2.png")
  car3Image = loadImage("images/car3.png")
  car4Image = loadImage("images/car4.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  //console.log(playerCount);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
   clear()
    game.play();
  }
  if(gameState === 2){
    game.end()
  }
}
