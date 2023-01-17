function setup() {
    const CELL_SIZE = 80;
    createCanvas(800, 800);
    let x = 0;
    let y = 0;
    let xVariation = 0;
    let yVariation = 0;
    let widthVarition = 0;
    let heightVaritation = 0;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    let colors = [color('#2d377f'), color('#a4a8a7'), color('#cf2d19'), color('#e8bb08'), color('##221a22'), color('#180b12')];
    strokeWeight(5);
    while(y < height){
        while(x < width){
            fill(random(colors));
            rect(x, y, currentWidth, currentHeight);
            x += currentWidth;
            let availableWidth = width - x;
            currentWidth = random(sizes);
            while(currentWidth > availableWidth){
                currentWidth -= CELL_SIZE;
            }
        }
        y += currentHeight;
        let availableHeight = height - y;
        currentHeight = random(sizes);
        while(currentHeight > availableHeight){
            currentHeight -= CELL_SIZE;
        }
        x = 0;
    }
}