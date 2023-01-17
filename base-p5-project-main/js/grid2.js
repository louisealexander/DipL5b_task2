let textures = [];
function preload(){
    let texturesNum = 6;
    for(let i = 1; i <= texturesNum; i++){
        // let texture = loadImage("images/texture" + i + ".png"); //concatenation
        let t = loadImage(`images/texture${i}.png`); // backticks are 'template literals' and dollar sign curly brace is string interpolation  
        textures.push(t); // adds texture to textures array
    }
}
function setup() {
    colours = [color('#251c5f'), color('#d43717'), color('#699035'), color('#e4cb29'), color('#2f1a1d'), color('#d5004d'), color('#76012d'), color('#4a78b1'), color('#8e2568'), color('#dd991c')]
    createCanvas(800, 800);
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height){
        while(x < width){
            tint(random(colours));
            let t = random(textures);
                image(t, x + random(-2, 2), y + random(-4, 2), CELL_SIZE + random(-3, 3), CELL_SIZE + random(-6, 4));
                x += CELL_SIZE;
            }
        y += CELL_SIZE;
        x = 0;
    }
}
