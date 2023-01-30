
let speed = 5
let diameter = 50
let x = 0
let yProgress
let first;
function setup() {
    createCanvas(400, 400) 
    background(220) 
}

function draw() {
    first = circle(x, 200, diameter)
    x = x + speed // move y in increments
    text("x start"+x, 20, 20)

    if (x >= width || x < 0) {
        speed = -speed
        text("x center "+x, 20, 30)
    }
   
   text("speed "+first.d, 20, 90)
   text("x end "+x, 20, 40)

}