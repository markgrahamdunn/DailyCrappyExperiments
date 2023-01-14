
function setup() {
    createCanvas(400, 400)
    background(220)
}

//
let i = 0;
let x = 0 
let y = 0
let d = 0


function draw() {
    while (i<100) {
        x = random(400)
        y = random(400)
        d = random(100)
        circle(x, y, d)
        i++
    }    
}