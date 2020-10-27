// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(270, 180);
  background(0, 51, 153)// background(192);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 135 + cos(theta) * 50;
    let y = 90 + sin(theta) * 50;
    noStroke();
    fill(255, 204, 0);
    star(x, y, 10);
  }
}
  function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
    vertex(x, y);  // 次につなぐ点を１つ増やす
    vertex(x, y);
    vertex(x, y);
    vertex(x, y);
  }
  endShape(CLOSE); // 点つなぎを終わる
}
