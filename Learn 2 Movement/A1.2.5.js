function setup() {
    createCanvas(400, 400)
    background(220)
}

let i = 0;
let x = 0 
let y = 0;

function draw() {
    while(i < 10){
        x = random(400)
        y = random(400)

        circle(x, y, 20)
        i++
    }
}