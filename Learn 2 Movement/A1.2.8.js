function setup() {
    createCanvas(400, 400)
}

let x = 0;

// function draw() {
//     background(220)
//     circle(x, 200, 50)
//     x++

//     if(x === width) {
//         x = 0
//     }
// }

function draw(){
    background(220)
    circle(x, 200, 50)
    x = x + 7 // can also be written like x+= 7

    if(x >= width) { // if x is equal or larger than width reset x to 0
        x = 0
    }
}