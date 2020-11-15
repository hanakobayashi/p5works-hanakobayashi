// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);
  stroke(0);
  strokeWeight(1);
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  scores = sort(scores, 10);
  scores = scores.reverse();
  piechart(scores);
}

function sum(arr){
  let n = 0;
  for(let i = 0; i < arr.length; i++){ n += arr[i]; }
  return n;
}

function piechart(scores){
  const total = sum(scores);
  let start = - HALF_PI;
  for (let i = 0; i < scores.length; i++){
    let stop = (TWO_PI * scores[i] / total) + start;
    // nofill();
    arc(width/2, height/2, 300, 300, start, stop, PIE);
        let dtheta = (stop-start) / 2;
        let theta = start + dtheta;
        let x = 100*cos(theta)+width/2;
        let y = 100*sin(theta)+height/2;

    text(scores[i].toPrecision(3), x, y);
    start = stop;
  }
  }
  // BLANK[1]

// function drawArcs(c1, c2, r) {
//   for (let i = 0; i < 20; i++) {
//     let start = TWO_PI / 20 * i;
//     let stop = TWO_PI / 20 * (i + 1);
//     fill(i % 2 == 0 ? c1 : c2);
//     arc(cx, cy, r, r, start, stop, PIE);
//   }
// }
