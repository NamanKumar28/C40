class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    //console.log("HI")
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
  Player.getPlayerInfo()
  player.getCarsAtEnd() 
 //console.log(allPlayers)
  if(allPlayers !== undefined){
    background(backgroundImage);
    image (track,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index = 0;
    var x = 220;
    var y;
    for(var plr in allPlayers){
      index = index+1; 
      x = x+230
      y = displayHeight-allPlayers[plr].distance;
      cars[index-1].x = x;
      cars[index-1].y = y;
      if(index === player.index){
        stroke(10)
        fill("red")
        ellipse(x,y,60,60)
        camera.position.x = displayWidth/2
        console.log(cars[index-1].y)
        camera.position.y = cars[index-1].y
      } 
    }
  } 
  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 10 
    player.update();
  }
  if(player.distance >4250){
    gameState = 2
    player.rank += 1
    Player.updateCarsAtEnd(player.rank)

  }
  drawSprites();
  }

  end(){
    console.log("game ended")
    console.log(player.rank)
  }
}


