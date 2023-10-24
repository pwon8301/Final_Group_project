function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

}

function RoadGenerate(Xpos,Ypos,Size,RoadDirection,Roadlength){
let Xpos = Xpos;
let Ypos = Ypos;
let Size = Size;
let RoadWidth = 20;
Roadlength = 600;
RoadDirection = 1;
// 1 for horizontal position
// 0 for vertical
let Road = rect(Xpos,Ypos,RoadWidth,Roadlength)
return Road;
}
