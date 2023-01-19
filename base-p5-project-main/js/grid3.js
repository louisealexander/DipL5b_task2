function setup() {
    createCanvas(1000, 1000);
    noLoop();
    noFill();
    colours = [color('#251c5f'), color('#d43717'), color('#699035'), color('#e4cb29'), color('#2f1a1d'), color('#d5004d'), color('#76012d'), color('#4a78b1'), color('#8e2568'), color('#dd991c')]
    // colours = [color('#042940'), color('#005C53'), color('#9FC131'), color('#DBF227'), color('#D6D58E')]
}

function draw() {
    background(255);

    let numShapes = 10; // number of shapes per side
    let size = (10 * width / 10) / numShapes; // the size of each quadrilateral

    for (i = 0; i < 12; i++) {
        for (y = 0; y < numShapes; y++) { // iterate in the y direction
            for (x = 0; x < numShapes; x++) { // iterate in the x direction
                push(); // start a new drawing state
                stroke(random(colours));
                // change the starting point of each instance to the correct location
                translate(width / 10 + x * size, height / 10 + y * size);
                quad(
                    random(-10,10), random(-10,10), 
                    random(size/2-5,size+5), random(-5,5), 
                    random(size/2-5, size+5), random(size/2-5,size+5), 
                    random(-5,5), random(size/2-5,size+5)
                )
                pop(); // reset the drawing state
            }
        }
    }
}