// ギリシャ国旗
function setup() {
  const blue = color(13, 94, 175);
  createCanvas(270, 180);
  // noStroke();
  background(255);
  noStroke();

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if(i % 2 == 0){
  fill(blue);// 条件が true のときにする処理
}
else{
  fill(255);  // 条件が false のときにする処理 BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
}
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);
  fill(255);
  rect(0, 40, size, d);
  rect(40, 0, d, size);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
