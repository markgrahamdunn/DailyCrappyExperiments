function setup() {
    createCanvas(400, 400)
    
}

let x = 0

function draw() {
    background(220) // redraws or clears the stage
    circle(x, 200, 50)
    x++; // move circle by one increment
    x+= 4; // move circle every 10 increment
}