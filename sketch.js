var ca,caruning;
var loki,lokirun;

function preload(){
  caruning=loadAnimation("ca1.jpg","ca2.jpg","ca4.jpg")
  lokirun=loadAnimation("m2.png","m3.png","m4.png","m5.png")
}

function setup() {
createCanvas(800,400);
ca=createSprite(400, 200, 50, 50);
ca.addAnimation("ca",caruning)
loki=createSprite(750,200,50,50);
loki.addAnimation("loki",lokirun)

}

function draw() {
  background(255,255,255);  
  drawSprites();
}
