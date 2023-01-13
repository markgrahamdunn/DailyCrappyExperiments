/* Sketch A1.1.10.js */

function setup() {
    createCanvas(400,400);
    background(220)
}
function draw() {
    // basically position 2 dots on x and y axis and draw a line in between them
    line(10,10,10,300)
    line(10,10,300,400)

    line(10,300,370,10)
    line(20,300,380,10)
    line(30,300,390,10)

    line(10,10,390,10)
    line(10,300,390,300)

    line(390,10,390,300)
}