// テキスト「アニメーション」
let x, y, vx, vy, angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  angle = 0;
}

function draw(){
  background(160, 192, 255);
  noStroke();
  fill(255, 204, 0);
  // translate(width / 2, height / 2);
    // 矩形のセンターが(0, 0)と重なる位置に矩形を描画
  angle += 0.01;
  x += 1
  y += 1
  star(x, y, 50, angle);
  // BLANK[2] (hint: 作った star 関数を使います)
  // // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 5; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}
