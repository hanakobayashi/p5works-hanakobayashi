// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, 500);
  x = random(50, windowWidth-300);
  y = 0;
  credits = ["GSP", "発展演習", "学科コア科目", "基礎演習", "特別演習", "学部共通科目", "基礎教養", "総合教養"];
  word = random(credits);
}

function fallingcredits(x, y, bc, tc){
  let w = textWidth(word);
  let h = textAscent() + textDescent(); //テキストの上と下を合わせて高さを計算
  let p = 5; // 余白の大きさ
  fill(bc);
  noStroke();
  rect(x, y, w + p * 10, h + p * 2);
  fill(tc);
  textSize(30);
  text(word, x + w/5, y + h/1.25);
}

function windowResized(){
    resizeCanvas(windowWidth, 500);
  }

function draw(){
  background(243,240,219);
  let bc = color(151,185,141);
  let tc = color(255, 255, 255);
  fallingcredits(x, y, bc, tc);
  if(mouseIsPressed){
    y += 5;
  }
}

function reset(){
  setup();
}

function keyPressed(){
  if(key == " "){ reset(); }
}
