
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  noStroke();
  let hair = color(164, 97, 68);
  let hairlght = color(185, 122, 96);
  let skin = color(255, 236, 228);
  let skincheek = color(255, 218, 218);
  let skinshd = color(236, 198, 182);
  let eyeblk = color(0, 0, 0);
  let eyewht = color(255, 255, 255);
  fill(hair);
  ellipse(200, 225, 300, 350)
  fill(skinshd);
  ellipse(200, 300, 50, 50)
  fill(skin);
  ellipse(75, 200, 50, 75)
  ellipse(325, 200, 50, 75)
  fill(skinshd);
  ellipse(75, 200, 30, 55)
  ellipse(325, 200, 30, 55)
  fill(skin);
  ellipse(200, 200, 250, 200)
  ellipse(75, 200, 15, 25)
  ellipse(325, 200, 15, 25)
  fill(hair);
  ellipse(150, 150, 50, 25)
  ellipse(250, 150, 50, 25)
  rect(175, 310, 50, 25);
  fill(eyeblk);
  ellipse(250, 200, 55, 50)
  ellipse(150, 200, 55, 50)
  fill(eyewht);
  ellipse(248, 203, 50, 40)
  ellipse(152, 203, 50, 40)
  fill(eyeblk);
  ellipse(245, 200, 25, 30)
  ellipse(150, 200, 25, 30)
  fill(eyewht);
  ellipse(252, 195, 10, 10)
  ellipse(157, 195, 10, 10)
  fill(skinshd);
  ellipse(200, 230, 25, 15)
  fill(hair);
  ellipse(200, 100, 90, 110)
  ellipse(150, 100, 50, 50)
  ellipse(250, 100, 50, 75)
  ellipse(275, 350, 50, 75)
  ellipse(75, 300, 50, 75)
  ellipse(115, 350, 50, 75)
  fill(hairlght);
  ellipse(210, 100, 50, 70)
  ellipse(180, 100, 20, 40)
  ellipse(240, 90, 30, 55)
  ellipse(160, 90, 40, 40)
  fill(skincheek);
  ellipse(265, 250, 50, 30)
  ellipse(135, 250, 50, 30)
  stroke('black');
  strokeWeight(4);
  line(180, 270, 200, 265);
  line(200, 265, 220, 270);
}
setup();
draw();
