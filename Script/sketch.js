function setup() {
  createCanvas(600, 600);
  background(220);
  

}

function draw() {
  background(220);
  MapGenerate(10,6,1)
  drawPacMan(300, 300, 20);
  drawTrees(100,300,1)
  drawghost(200,300,1)
  noLoop()
  //RoadGenerate(20,0,2,60,1);
}
function MapGenerate(NumOfHorizontalRoad,NumOfVerticalRoad,Size){
  //RoadGenerate(20,0,2,60,1);
  let RoadX = 0;
  let RoadY = 0;
  let IntervalHeight = 600 / NumOfHorizontalRoad * Size;
  let IntervalWidth = 600/ NumOfVerticalRoad * Size;
  for (let i = 0; i < NumOfHorizontalRoad; i++) {
    RoadY = IntervalHeight*i +random(10*Size,IntervalHeight);
    RoadGenerate(0,RoadY,Size,600,1);
  }
  for (let i = 0; i < NumOfVerticalRoad; i++) {
    RoadX = IntervalWidth*i +random(10*Size,IntervalWidth);
    RoadGenerate(RoadX,0,Size,600,0);
  }
}

function RoadGenerate(Xpos,Ypos,Size,Roadlength,RoadDirection){
//for RoadDirection
// 1 for horizontal position
// 0 for vertical
let RoadWidth = 10;
RoadWidth=RoadWidth*Size;
Roadlength = Roadlength*Size
if(RoadDirection == 0){
  rect(Xpos,Ypos,RoadWidth,Roadlength);
}
if(RoadDirection == 1){
  rect(Xpos,Ypos,Roadlength,RoadWidth);
}

}
// for draw pacman
function drawPacMan(x, y, size) {
  let startAngle = PI / 6;
  let endAngle = -PI / 6;
  fill(255, 255, 0);
  arc(x, y, size, size, startAngle, endAngle, PIE);
}

//for draw trees
function drawTrees(x,y,size) {
    fill(0, 255, 0); // Set the fill color to green
    ellipse(x+10, y-10, 66*size, 66*size);
    ellipse(x+35, y, 40*size, 40*size);
    ellipse(x-5, y-40, 40*size, 40*size);
    ellipse(x-35, y-20, 50*size, 50*size);
    ellipse(x-55, y+10, 40*size, 40*size);
    ellipse(x-45, y+40, 30*size, 30*size);
    ellipse(x-25, y+30, 40*size, 40*size);
    ellipse(x-5, y+40, 50*size, 50*size);
    ellipse(x+30, y+30, 40*size, 40*size);
    ellipse(x-15, y, 60*size, 60*size);
}

//draw ghost
function drawghost(x, y, size){
  //the color of ghost is yellow
  fill(255, 204, 0);
  stroke(0);

  //Use a semicircle for the ghost’s head
  arc(x, y, size * 20, size * 20, PI, 0);

  //Use a square for the body of the ghost
  rect(x - size * 10, y, size * 20, size * 20);

  //Use four small triangles for the body of the ghost
  triangle(x - size * 10, y + size * 20, x - size * 5, y + size * 25, x, y + size * 20);
  triangle(x, y + size * 20, x + size * 5, y + size * 25, x + size * 10, y + size * 20);

  //Draw ghost eyes
  fill(0);
  ellipse(x - size*5, y - size*5, size*5, size*5);
  ellipse(x + size*5, y - size*5, size*5, size*5);
}