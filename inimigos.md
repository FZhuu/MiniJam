depois colocar no código

let contador = 0;
let vidas = 3;
let pontuacao = 0;

function gerarForaDaTela() {
  let lado = int(random(4)); // 0 = cima, 1 = direita, 2 = baixo, 3 = esquerda
  let x, y;
  
  if (lado === 0) { // cima
    x = random(0, width);
    y = random(-400, -200);
  } else if (lado === 1) { // direita
    x = random(width + 200, width + 400);
    y = random(0, height);
  } else if (lado === 2) { // baixo
    x = random(0, width);
    y = random(height + 20, height + 400);
  } else { // esquerda
    x = random(-400, -200);
    y = random(0, height);
  }
  
  return createVector(x, y);
}
 
function setup() {
  createCanvas(600, 600);
  randomx = random(-600, -800)
  randomy = random(-600, -800)
  randomx1 = random(600, 800)
  randomy1 = random(600, 800)
  randomx2 = random(-600, -800)
  randomy2 = random(-600, -800)
  randomx3 = random(600, 800)
  randomy3 = random(600, 800)
  randomx4 = random(-600, -800)
  randomy4 = random(-600, -800)
  randomx5 = random(600, 800)
  randomy5 = random(600, 800)
  
  c2pos = createVector(randomx,randomy)
  c3pos = createVector(randomx1,randomy1)
  c4pos = createVector(randomx2,randomy2)
  c5pos = createVector(randomx3,randomy3)
  c6pos = createVector(randomx4,randomy4)
  c7pos = createVector(randomx5,randomy5)
  
  
}

function draw() {
  background(120);
  c1pos = createVector(mouseX,mouseY)
  c2vel = p5.Vector.sub(c1pos,c2pos)
  c3vel = p5.Vector.sub(c1pos,c3pos)
  c4vel = p5.Vector.sub(c1pos,c4pos)
  c5vel = p5.Vector.sub(c1pos,c5pos)
  c6vel = p5.Vector.sub(c1pos,c6pos)
  c7vel = p5.Vector.sub(c1pos,c7pos)
  circle(c2pos.x,c2pos.y,50)
  if (p5.Vector.dist(c1pos,c2pos) < 50) {
  c2pos = gerarForaDaTela();
    contador ++
    vidas --
} else {
  c2vel.setMag(2);
  c2pos.add(c2vel); }
  
  if(contador >= 1) {
    circle(c3pos.x,c3pos.y,50)
    if (p5.Vector.dist(c1pos,c3pos) < 50) {
  c3pos = gerarForaDaTela();
    contador ++
    vidas --
} 
  c3vel.setMag(2);
  c3pos.add(c3vel); }

  
  
    if(contador >= 2) {
    circle(c4pos.x,c4pos.y,50)
    if (p5.Vector.dist(c1pos,c4pos) < 50) {
  c4pos = gerarForaDaTela();
    contador ++
    vidas --
} 
  c4vel.setMag(2);
  c4pos.add(c4vel); }
    
  
  
    if(contador >= 3) {
    circle(c5pos.x,c5pos.y,50)
    if (p5.Vector.dist(c1pos,c5pos) < 50) {
  c5pos = gerarForaDaTela();
    contador ++
    vidas --
} 
  c5vel.setMag(2);
  c5pos.add(c5vel); }
    
  
  
  
    if(contador >= 4) {
    circle(c6pos.x,c6pos.y,50)
    if (p5.Vector.dist(c1pos,c6pos) < 50) {
  c6pos = gerarForaDaTela();
    contador ++
    vidas --
} 
  c6vel.setMag(2);
  c6pos.add(c6vel); }
    
  

    if(contador >= 5) {
    circle(c7pos.x,c7pos.y,50)
    if (p5.Vector.dist(c1pos,c7pos) < 50) {
  c7pos = gerarForaDaTela();
    contador ++
    vidas --
 
  c7vel.setMag(2);
  c7pos.add(c7vel); }
    
  }
  

  

  
  circle(c1pos.x,c1pos.y,50)
   text("Contador: " + contador, 20, 40);
  text("Vidas: " + vidas, 20, 60);
  
  if(vidas < 0) {
    text("Pontuação final: " + pontuacao, 20, 60);
  }
  
  
  
}
