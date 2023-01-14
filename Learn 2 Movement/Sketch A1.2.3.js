function setup() {
    createCanvas(400, 400)
    background(220)
}

let x = 0;
let y = 0;

// function draw is a continious loop and will draw them forever unless you tell it to stop
function draw() {
    // random(400) will provide a number between 0 and 400 - but not 400
    // random (30, 200) will provide a number between 30 and 200 but not 200
    x = random(30,400) // x position will be between 30 and 400 but not 400
    y = random(10,400) // y postion will be between 10 and 400 but not 400
    d = random(100) // diameter will be between 0 and 100 but not 100
    r = random(255) // red will be between 0 and 255 but not 255
    g = random(255) // green will be between 0 and 255 but not 255
    b = random(255) // blue will be between 0 and 255 but not 255
    a = random(255) // alpha will be between 1 and 100 but not 100

    fill(r, g, b,a)
    circle(x, y, d)
}