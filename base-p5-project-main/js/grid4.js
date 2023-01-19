function setup() {
	createCanvas(800, 800);
    noLoop();
    colours = [color('#ECC88C'), color('#7A6D31'), color('#7A577A'), color('#287A70'), color('#162E25')]
}

function draw() {
    const CELL_SIZE = width/7; // divides the canvas into 7 equal columns and rows, 7 x 7
	for (var x = 0; x < width; x += CELL_SIZE) {
		for (var y = 0; y < height; y += CELL_SIZE) {
			noStroke();
			line(x, 0, x, height);
			line(0, y, width, y);

            if (random(1)>0.2){
                fill(random(colours));
                triangle(x, y, x, y + CELL_SIZE, x + CELL_SIZE, y);
                fill(random(colours));
                triangle(x, y + CELL_SIZE, x + CELL_SIZE, y + CELL_SIZE, x + CELL_SIZE, y);
            }else{
                fill(random(colours));
                rect(x, y, CELL_SIZE);
            }

		}
	}
}