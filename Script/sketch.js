function setup() {
  createCanvas(600, 600);
  background(220);
  

}

function draw() {
  background(220);
  MapGenerate(10,6,1)
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
