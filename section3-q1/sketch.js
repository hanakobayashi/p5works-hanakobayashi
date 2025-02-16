// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
}

function draw(){
  let bc = color(0, 102, 255);
  let tc = color(255, 255, 255);
  balloon("I love keyakizaka46", 20, 30, bc, tc);
}

function balloon(t, x, y, bc, tc){
  let w = textWidth(t);
  let h = textAscent() + textDescent(); //テキストの上と下を合わせて高さを計算
  let p = 5; // 余白の大きさ
  fill(bc);
  rect(x, y, w + p * 2, h + p * 2);
  fill(tc);
  text(t, x + p, y + h);
}
