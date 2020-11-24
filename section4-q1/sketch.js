// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  Stroke(255, 255, 255);// BLANK[1]
  ellipse(width / 2, height / 2, size);
}
// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = mouseIsPressed ? (count + 1) % cycle : (count + 0.25) % cycle;
  if(count <= 50){
    size = 50 + count;
  }  else if (count > 50 && count <= 100){
    size = 150 - count;
  }
  // 100になったら1に戻る(あまりの計算)
//   if(count < 100){
//   count = (count + 1);
// }
// else if(count  100 && count < 0){
//   count = (count - 1);
// }　100になったら逆方向に小さくしたいけど上手くいかない
  // BLANK[1]
  stroke(255, 255, 255);
  ellipse(width / 2, height / 2, size);
}
