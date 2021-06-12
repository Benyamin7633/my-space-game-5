var rover,rock,skycrane,bg1,rocket
var rocketimg,bg1img,bg2img,roverimg,skycraneimg
var gameState = "start"

function preload()
{
rocketimg = loadImage("images/rocket sls.png")
bg1img = loadImage("images/bgearth.jpg")
bg2img = loadImage("images/mars background 2.png")
roverimg = loadImage("images/haaa roverr.png")
skycraneimg = loadImage("images/skyyyyyy craaaaaane.png")
}

function setup() {
	createCanvas(1536,754);
  
bg1 = createSprite(768,377,1536,754)
bg1.addImage(bg1img)
bg1.scale = 2
rocket = createSprite(730,500);
rocket.addImage(rocketimg)
rocket.scale = 0.4
rover = createSprite(700,-150,0,0)
rover.addImage(roverimg)
rover.scale = 0.2
rover.visible = false
skycrane = createSprite(700,-200,0,0)
skycrane.addImage(skycraneimg)
skycrane.scale = 0.5
skycrane.visible = false
}


function draw() {
  
  background(0);
  fill(0)
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(rocket.velocityY <= -8){
    rocket.scale = rocket.scale-0.003
  }
if(rocket.y < -300 && rocket.y > -1000){
fill(0)
textSize(20)
text("7 months later we are in the atmosphere of mars",550,300)
  }
if(rocket.y < -1000){
rocket.destroy()
bg1.addImage(bg2img)
bg1.scale = 2.5;
rover.visible = true
skycrane.visible = true
rover.velocityY = 7
skycrane.velocityY = 7
}
if(rover.y > 700){
rover.velocityY = 0
}
if(skycrane.y > 650 && gameState == "start"){
skycrane.velocityY = 0;
gameState = "bye"
}
if(gameState == "bye"){
skycrane.velocityY = -6
}
if(skycrane.y < -500){
skycrane.destroy()
}
if(keyDown(LEFT_ARROW)){
rover.x -= 3
bg1.x  += 3
camera.position.x = rover.x
}
if(keyDown(RIGHT_ARROW)){
 rover.x += 3
 bg1.x  -= 3
 camera.position.x = rover.x
}

}

function keyPressed(){
if(keyCode === 32){
  rocket.velocityY = -8
  

}

 }
