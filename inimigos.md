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


V2:


let contador = 0;
let vidas = 3;
let pontuacao = 0;
let v = 2;
let t = 50;

function gerarForaDaTela() {
  let lado = int(random(4)); // 0 = cima, 1 = direita, 2 = baixo, 3 = esquerda
  let x;
  let y;
  
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

  c2pos = createVector(1000,1000)
  c3pos = createVector(1000,1000)
  c4pos = createVector(1000,1000)
  c5pos = createVector(1000,1000)
  c6pos = createVector(1000,1000)
  c7pos = createVector(1000,1000)  
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
  if (p5.Vector.dist(c1pos,c2pos) < t) {
  c2pos = gerarForaDaTela();
    contador ++
    vidas --
} else {
  c2vel.setMag(v);
  c2pos.add(c2vel); }
  
  if(pontuacao >= 5) {
    circle(c3pos.x,c3pos.y,50)
    if (p5.Vector.dist(c1pos,c3pos) < t) {
  c3pos = gerarForaDaTela();
    pontuacao ++
    vidas --
} 
  c3vel.setMag(v);
  c3pos.add(c3vel); }

  
  
    if(pontuacao >= 10) {
    circle(c4pos.x,c4pos.y,50)
    if (p5.Vector.dist(c1pos,c4pos) < t) {
  c4pos = gerarForaDaTela();
    pontuacao ++
    vidas --
} 
  c4vel.setMag(v);
  c4pos.add(c4vel); }
    
  
  
    if(pontuacao >= 15) {
    circle(c5pos.x,c5pos.y,50)
    if (p5.Vector.dist(c1pos,c5pos) < t) {
  c5pos = gerarForaDaTela();
    pontuacao ++
    vidas --
} 
  c5vel.setMag(v);
  c5pos.add(c5vel); }
    
  
  
  
    if(pontuacao >= 20) {
    circle(c6pos.x,c6pos.y,50)
    if (p5.Vector.dist(c1pos,c6pos) < t) {
  c6pos = gerarForaDaTela();
    pontuacao ++
    vidas --
} 
  c6vel.setMag(v);
  c6pos.add(c6vel); }
    
  

    if(pontuacao >= 25) {
    circle(c7pos.x,c7pos.y,50)
    if (p5.Vector.dist(c1pos,c7pos) < t) {
  c7pos = gerarForaDaTela();
    pontuacao ++
    vidas --
 
  c7vel.setMag(v);
  c7pos.add(c7vel); }
    
  }
  

  

  
  circle(c1pos.x,c1pos.y,t)
   text("Pontuação: " + pontuacao, 20, 40);
  text("Vidas: " + vidas, 20, 60);
  
  if(vidas < 0) {
    text("Pontuação final: " + pontuacao, 20, 80);
    noLoop()
  }
  
  if (frameCount % 120 === 0) {
  v += 0.5;
  t += 5;
  pontuacao += 1;
}
  
    if (frameCount % 1200 === 0) {
    c1pos = gerarForaDaTela();
    
  }
  
    if (frameCount % 1500 === 0) {
    c2pos = gerarForaDaTela();
  }
  
    if (frameCount % 1800 === 0) {
    c3pos = gerarForaDaTela();
  }

  
}


V3

let originPosition,
    BHradius = 30,
    speed = 5,
    countpoints = 0,
    vidas = 3,
    pointPosition,
    pointRadius = 10,
    gameStarted = false,
    gameOvered = false,
    victory = false,
    estrelas = 0,
    contadorEstrelas = 400;

function setup() {
    createCanvas(windowWidth - (windowWidth * 0.0001), windowHeight - (windowHeight * 0.001));
    originPosition = createVector((windowWidth / 2), (windowHeight / 2));
    pointPosition = createVector(random(0, windowWidth), random(0, windowHeight));
    listaEstrelas = [];
    for (let i = 0; i < contadorEstrelas; i++) {
        listaEstrelas.push([random(0, windowWidth), random(0, windowHeight), 1, 2, 5])
    }
    c2pos = createVector(random(-600, -800), random(-600, -800));
    c3pos = createVector(random(600, 800), random(600, 800));
    c4pos = createVector(random(-600, -800), random(-600, -800));
    c5pos = createVector(random(600, 800), random(600, 800));
    c6pos = createVector(random(-600, -800), random(-600, -800));
    c7pos = createVector(random(600, 800), random(600, 800));
}


function draw() {
    if (!gameStarted && !gameOvered && !victory) {
        background("black");
        stroke(93, 63, 211);
        fill(93, 63, 211, 255);
        textSize(90);
        text("Black Hole", windowWidth / 2.84, windowHeight / 4);
        textSize(30);
        text("eat the planets", windowWidth / 2.28, windowHeight / 3.3);
        stroke(255, 255, 255, 150);
        fill(255, 255, 255, 150);
        textSize(20);
        text("press space to start", windowWidth / 2.27, windowHeight / 2.1);
        textSize(20);
        text("use WASD to move", windowWidth / 2.268, windowHeight / 1.95);
        if (keyIsDown(32)) {
            gameStarted = true;
        }
    } else if (!gameStarted && gameOvered && !victory) {
        background("black");
        stroke(93, 63, 211);
        fill(93, 63, 211, 255);
        // line(windowWidth/2,0,windowWidth/2,windowHeight)
        textSize(90);
        text("Game Over", windowWidth / 2.95, windowHeight / 4);
        textSize(30);
        text("Want to play again?", windowWidth / 2.44, windowHeight / 3.3);
        stroke(255, 255, 255, 150);
        fill(255, 255, 255, 150);
        textSize(20);
        text("press space to restart", windowWidth / 2.27, windowHeight / 2.1);
        if (keyIsDown(32)) {
            gameStarted = true;
            gameOvered = false;
            victory = false;
            vidas = 3;
            countpoints = 0;
            BHradius = 30;
            speed = 5;
            pointRadius = 10;
        }
    } else if (!gameStarted && !gameOvered && victory) {
        background("black");
        stroke(93, 63, 211);
        fill(93, 63, 211, 255);
        // line(windowWidth/2,0,windowWidth/2,windowHeight)
        textSize(90);
        text("Victory", windowWidth / 2.45, windowHeight / 4);
        textSize(30);
        text("Want to play again?", windowWidth / 2.44, windowHeight / 3);
        stroke(255, 255, 255, 150);
        fill(255, 255, 255, 150);
        textSize(20);
        text("press space to restart", windowWidth / 2.27, windowHeight / 2.1);
        if (keyIsDown(32)) {
            gameStarted = true;
            gameOvered = false;
            victory = false;
            vidas = 3;
            countpoints = 0;
        }
    } else { gameStart(); }

}

function coletarPonto(x1, x2, y1, y2, r1, r2) {
    let distancia = dist(x1, y1, x2, y2);
    return distancia <= (r1 / 2 + r2 / 2);
}

function windowResized() {
    resizeCanvas(windowWidth - (windowWidth * 0.0001), windowHeight - (windowHeight * 0.001));
}

function gameStart() {
    let planetColor = color(random(50, 255), random(50, 255), random(50, 255))
    background("black");
    listaEstrelas.forEach(element => {
        stroke("white");
        fill("white");
        drawStar(element[0], element[1], element[2], element[3], element[4]);
    });
    fill("yellow");
    stroke("yellow");
    drawPlanet(pointPosition.x, pointPosition.y, pointRadius,planetColor);
    if (coletarPonto(originPosition.x, pointPosition.x, originPosition.y, pointPosition.y, BHradius, 10)) {
        BHradius += 5;
        speed += 0.2;
        countpoints++;
        pointRadius += 1.5;
        pointPosition.x = random(0 + (pointRadius / 2), windowWidth - (pointRadius / 2));
        pointPosition.y = random(0 + (pointRadius / 2), windowHeight - (pointRadius / 2));
    }
    originPosition.x = constrain(originPosition.x, (0 + BHradius / 2), (windowWidth - BHradius / 2));
    originPosition.y = constrain(originPosition.y, (0 + BHradius / 2), (windowHeight - BHradius / 2));
    let c2vel = p5.Vector.sub(originPosition, c2pos)
    let c3vel = p5.Vector.sub(originPosition, c3pos)
    let c4vel = p5.Vector.sub(originPosition, c4pos)
    let c5vel = p5.Vector.sub(originPosition, c5pos)
    let c6vel = p5.Vector.sub(originPosition, c6pos)
    let c7vel = p5.Vector.sub(originPosition, c7pos)
    drawMeteor(c2pos.x, c2pos.y, 50, random(80, 150))
    if (p5.Vector.dist(originPosition, c2pos) < (25 + (BHradius ))) {
        c2pos = gerarForaDaTela();
        vidas--
    } else {
        c2vel.setMag(speed/2);
        c2pos.add(c2vel);
    }
    if (countpoints >= 1) {
        drawMeteor(c3pos.x, c3pos.y, 50, random(80, 150))
        if (p5.Vector.dist(originPosition, c2pos) < (25 + (BHradius))) {
            c3pos = gerarForaDaTela();
            vidas--
        }
        c3vel.setMag(speed/2);
        c3pos.add(c3vel);
    }
    if (countpoints >= 2) {
        drawMeteor(c4pos.x, c4pos.y, 50, random(80, 150))
        if (p5.Vector.dist(originPosition, c2pos) < (25 + (BHradius))) {
            c4pos = gerarForaDaTela();
            vidas--
        }
        c4vel.setMag(speed/2);
        c4pos.add(c4vel);
    }
    if (countpoints >= 3) {
        drawMeteor(c5pos.x, c5pos.y, 50, random(80, 150))
        if (p5.Vector.dist(originPosition, c2pos) < (25 + (BHradius))) {
            c5pos = gerarForaDaTela();
            vidas--
        }
        c5vel.setMag(speed/2);
        c5pos.add(c5vel);
    }
    if (countpoints >= 4) {
        drawMeteor(c6pos.x, c6pos.y, 50, random(80, 150))
        if (p5.Vector.dist(originPosition, c2pos) < (25 + (BHradius))) {
            c6pos = gerarForaDaTela();
            vidas--
        }
        c6vel.setMag(speed/2);
        c6pos.add(c6vel);
    }
    if (countpoints >= 5) {
        drawMeteor(c7pos.x, c7pos.y, 50, random(80, 150))
        if (p5.Vector.dist(originPosition, c2pos) < (25 + (BHradius))) {
            c7pos = gerarForaDaTela();
            vidas--
        } else {
            c7vel.setMag(speed/2);
            c7pos.add(c7vel); }
        }
    
    fill("black");
    stroke(93, 63, 211, 178.5);
    strokeWeight(2);
    circle(originPosition.x, originPosition.y, BHradius);
    if (keyIsDown(83) || keyIsDown(40)) {
        originPosition.y += speed;
    }
    if (keyIsDown(87) || keyIsDown(38)) {
        originPosition.y -= speed;
    }
    if (keyIsDown(65) || keyIsDown(37)) {
        originPosition.x -= speed;
    }
    if (keyIsDown(68) || keyIsDown(39)) {
        originPosition.x += speed;
    }
    textSize(22);
    fill("magenta");
    stroke("magenta");
    text(`Black Hole\nPontos: ${countpoints} \nVidas: ${vidas}`, 20, 30);

    if (vidas <= 0) {
        gameStarted = false;
        gameOvered = true;
        victory = false;
        return
    } else if (countpoints >= 100) {
        gameStarted = false;
        gameOvered = false;
        victory = true;
        return
    }

}

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


function drawStar(x, y, raioInterno, raioExterno, numPontas) {
    fill(255, 255, 255); // Cor amarela
    stroke(255, 204, 255);
    strokeWeight(0.5);

    beginShape();
    for (let i = 0; i < numPontas * 2; i++) {
        let angle = TWO_PI * i / (numPontas * 2);
        let raio = i % 2 === 0 ? raioExterno : raioInterno;
        let sx = x + cos(angle) * raio;
        let sy = y + sin(angle) * raio;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function drawPlanet(x, y, size, planetColor) {
    // Atmosphere effect
    noFill();
    stroke(planetColor);
    strokeWeight(0);
    ellipse(x, y, size + 20);

    // Planet body
    noStroke();
    fill(planetColor);
    ellipse(x, y, size);

    // Craters
    let numCraters = floor(random(3, 8)); // Random number of craters
    for (let i = 0; i < numCraters; i++) {
        let angle = random(TWO_PI);
        let craterX = x + cos(angle) * (size / 3);
        let craterY = y + sin(angle) * (size / 3);
        let craterSize = random(size * 0.1, size * 0.2);

        fill(0, 50); // Darker crater color
        ellipse(craterX, craterY, craterSize);
    }
}

function drawMeteor(x, y, size, tailLength) {
    // Fiery tail effect
    for (let i = 0; i < 10; i++) {
        let tailX = x - i * (tailLength / 10);
        let tailY = y + i * (tailLength / 30);
        let tailSize = size * (1 - i / 10);
        let tailAlpha = map(i, 0, 10, 200, 0); // Gradually fades out

        fill(255, random(100, 150), 0, tailAlpha); // Fire color
        noStroke();
        ellipse(tailX, tailY, tailSize * 1.5, tailSize);
    }

    // Meteor core (rocky surface)
    fill(100, 100, 100);
    stroke(50);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < 8; i++) {
        let angle = TWO_PI * i / 8;
        let radius = size * random(0.8, 1.2);
        let px = x + cos(angle) * radius;
        let py = y + sin(angle) * radius;
        vertex(px, py);
    }
    endShape(CLOSE);
}
