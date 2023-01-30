
function setup() {
    createCanvas(400, 400)
    background(220)
}

//
let i = 0;
let x,y,d = 0
let r,g,b,a = 0;


function draw() {
    while (i<100) {
        x = random(400)
        y = random(400)
        d = random(300)
        r = random(255)
        g = random(255)
        b = random(255)
        a= random(255)
        fill(r,g,b,a)
        circle(x, y, d)
        i++
    }    
}