function setup() {
    createCanvas(400, 400)
    background(220)
}

let x = 0;
let y = 0;

function draw() {
    for(let i = 1; i < 100; i++){
        x = random(100,300)
        y = random(100,300)

        circle(x, y, 20)
    }
    //
    noLoop() // stop loop once condition is met
}