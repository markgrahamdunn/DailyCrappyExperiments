function setup() {
    createCanvas(400, 400)
}

let x = 0;
let speed = 7;

function draw() {
    background(220)

    circle(x, 200, 50)

    x = x+speed

    if(x>=width) {
    speed =-speed
    }
    
}