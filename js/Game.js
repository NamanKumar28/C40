class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    console.log("HI")
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)
    cars = [car1,car2,car3,car4]

    car1.addImage(car1Image);
    car2.addImage(car2Image);
    car3.addImage(car3Image);
    car4.addImage(car4Image);
  }

  play(){
  form.hide()
  //textSize (30);
 // text("gameStart", 120,100)
  Player.getPlayerInfo() 
 console.log(allPlayers)
  if(allPlayers !== undefined){
    background(backgroundImage);
    image (track,0,-displayHeight*4,displayWidth,displayHeight*5)
    //var displayPosition = 130
    var index = 0;
    var x = 220;
    var y;
    for(var plr in allPlayers){
      index = index+1; 
      x = x+220
      y = displayHeight-allPlayers[plr].distance;
      cars[index-1].x = x;
      cars[index-1].y = y;
      if(index === player.index){
        cars[index-1].shapeColor = "red"
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
      } 
     /* if(plr === "player"+ player.index)
        fill("red")
      else
        fill("black")

      // displayPosition += 30
        textSize (15);
        text(allPlayers[plr].name+ ": "+ allPlayers[plr].distance, 120,displayPosition)*/
    }
  } 
  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 50 
    player.update();
  }
  if(player.distance >4000){
    gameState = 2

  }
  drawSprites();
  }
}


