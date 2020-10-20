// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0 && j % 2 == 0){
    fill(196);
    }
    rect(i*20, j*20, 20, 20)
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
