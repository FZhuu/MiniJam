let originPosition,BHradius=30,speed=5,countpoints=0,pointPosition,pointRadius=10;

function setup() {
    createCanvas(windowWidth - (windowWidth * 0.0001), windowHeight - (windowHeight * 0.001));
    originPosition = createVector((windowWidth / 2), (windowHeight / 2));
    pointPosition = createVector(random(0,windowWidth), random(0,windowHeight));
    background("#28282B");
}


function draw() { 
    background("#28282B");
    fill("yellow");
    stroke("yellow")
    circle(pointPosition.x, pointPosition.y, pointRadius);
    if (coletarPonto(originPosition.x, pointPosition.x, originPosition.y, pointPosition.y, BHradius, 10)) {
        BHradius += 5;
        speed += 0.2;
        countpoints++;
        pointRadius += 1.5;
        pointPosition.x = random(0+(pointRadius/2),windowWidth-(pointRadius/2));
        pointPosition.y = random(0+(pointRadius/2),windowHeight-(pointRadius/2));
    }
    originPosition.x = constrain(originPosition.x, (0+BHradius/2), (windowWidth-BHradius/2));
    originPosition.y = constrain(originPosition.y, (0+BHradius/2), (windowHeight-BHradius/2));
    fill("black");
    stroke(93, 63, 211,178.5);
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
    textAlign(CENTER, TOP);  
    fill("white");
    text("Black Hole\nPontos: "+countpoints, width / 2, 20); 
}

function coletarPonto(x1,x2,y1,y2,r1,r2) {
    let distancia = dist(x1, y1, x2, y2);
    return distancia <= (r1/2 + r2/2);
}