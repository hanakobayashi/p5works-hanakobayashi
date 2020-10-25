// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 !== 0 && j % 2 == 0){
        fill(196);
    }
    else if(i % 2 == 0 && j % 2 !== 0){
      fill(196);
    }
    else if(i%2==0 && j%2==0){
      fill(255);
    }
    else if(i%2!==0&&j%2!==0){
      fill(255);
    }
      rect(25*i, 25*j, 25, 25);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
  //start drawing red circles!
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 3; j++){
      fill(255, 0, 0);
      if(i%2!==0 && j%2==0){
      ellipse(12.5+25*i, 12.5+25*j, 20);
      }
      else if(i% 2 == 0 && j % 2 !== 0){
      ellipse(12.5+25*i, 12.5+25*j, 20);
    }
    }
    }
    // start drawing black circles
    for(let i = 0; i < 8; i++){
      for(let j = 5; j < 8; j++){
        fill(0);
        if(i%2!==0 && j%2==0){
        ellipse(12.5+25*i, 12.5+25*j, 20);
        }
        else if(i% 2 == 0 && j % 2 !== 0){
        ellipse(12.5+25*i, 12.5+25*j, 20);
      }
      }
      }
}
