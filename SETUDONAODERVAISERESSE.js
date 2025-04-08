let blackHole;
let objects = [];
let stars = [];
let score = 0;

function setup() {
    createCanvas(600, 400);
    blackHole = new BlackHole(width / 2, height / 2, 40); // Improved Black Hole
    spawnObjects(); // Generate initial objects
    generateStars(100); // Space background with stars
}

function draw() {
    background(10);

    // Draw space background
    drawStars();

    // Display and move black hole
    blackHole.move();
    blackHole.display();

    // Display and check for collisions with objects
    for (let i = objects.length - 1; i >= 0; i--) {
        objects[i].display();
        if (blackHole.eats(objects[i])) {
            objects.splice(i, 1);
            blackHole.grow();
            score++;
            spawnObjects(); // Spawn a new object after eating
        }
    }

    // Draw score
    fill(255);
    textSize(18);
    text(`Score: ${score}`, width - 100, 30);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) blackHole.setDirection(-1, 0);
    if (keyCode === RIGHT_ARROW) blackHole.setDirection(1, 0);
    if (keyCode === UP_ARROW) blackHole.setDirection(0, -1);
    if (keyCode === DOWN_ARROW) blackHole.setDirection(0, 1);
}

// --- BLACK HOLE CLASS ---
class BlackHole {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 2;
        this.dx = 0;
        this.dy = 0;
    }

    move() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    setDirection(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    display() {
        // Accretion disk
        for (let i = 0; i < 50; i++) {
            let ringSize = this.size + i * 2;
            let alpha = map(i, 0, 50, 100, 0);
            let ringColor = color(random(200, 255), random(50, 150), random(50, 255), alpha);

            noFill();
            stroke(ringColor);
            strokeWeight(2);
            ellipse(this.x, this.y, ringSize);
        }

        // Event horizon (black core)
        noStroke();
        fill(0);
        ellipse(this.x, this.y, this.size);

        // Gravitational lensing effect
        for (let i = 0; i < 10; i++) {
            let lensSize = this.size * 1.5 + i * 5;
            let alpha = map(i, 0, 10, 50, 0);
            stroke(255, alpha);
            noFill();
            ellipse(this.x, this.y, lensSize);
        }
    }

    eats(obj) {
        let d = dist(this.x, this.y, obj.x, obj.y);
        return d < this.size / 2;
    }

    grow() {
        this.size += 5;
    }
}

// --- SPACE OBJECT CLASS (DETAILED STARS, PLANETS, METEORS) ---
class SpaceObject {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.size = random(20, 50);
    }

    display() {
        noStroke();
        if (this.type === "star") {
            // Twinkling Star Effect
            let brightness = random(180, 255);
            fill(brightness, brightness, 0);
            for (let i = 0; i < 5; i++) {
                let angle = TWO_PI * i / 5;
                let xOffset = cos(angle) * this.size / 2;
                let yOffset = sin(angle) * this.size / 2;
                ellipse(this.x + xOffset, this.y + yOffset, this.size / 3);
            }
            ellipse(this.x, this.y, this.size / 2);
        }
        else if (this.type === "planet") {
            // Random Colored Planets
            fill(random(50, 255), random(50, 255), random(50, 255));
            ellipse(this.x, this.y, this.size);
            fill(255, 100);
            ellipse(this.x - this.size / 4, this.y - this.size / 4, this.size / 3);
        }
        else if (this.type === "meteor") {
            // Meteor with Trail
            fill(100, 100, 100);
            beginShape();
            for (let i = 0; i < 8; i++) {
                let angle = TWO_PI * i / 8;
                let radius = this.size * random(0.8, 1.2);
                let px = this.x + cos(angle) * radius;
                let py = this.y + sin(angle) * radius;
                vertex(px, py);
            }
            endShape(CLOSE);

            // Glowing trail effect
            for (let i = 0; i < 5; i++) {
                fill(255, random(100, 150), 0, map(i, 0, 5, 200, 0));
                ellipse(this.x - i * 5, this.y + i * 2, this.size * 1.2, this.size * 0.8);
            }
        }
    }
}

// --- SPACE BACKGROUND WITH STARS ---
function generateStars(numStars) {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        let x = random(width);
        let y = random(height);
        let brightness = random(150, 255);
        let size = random(1, 3);
        stars.push({ x, y, brightness, size });
    }
}

function drawStars() {
    for (let star of stars) {
        fill(star.brightness);
        noStroke();
        ellipse(star.x, star.y, star.size);
    }
}

function spawnObjects() {
    let types = ["star", "planet", "meteor"];
    let type = random(types);
    let x = random(width);
    let y = random(height);
    objects.push(new SpaceObject(x, y, type));
}
