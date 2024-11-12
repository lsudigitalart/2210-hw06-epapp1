
let imgArray = [];
var bowl;
var fruit;
var song;
let isPlaying = false;

function preload() {
    bowl = loadImage("bowl.jpg");

    imgArray.push(loadImage("banana.jpg"));
    imgArray.push(loadImage("orange.jpg"));
    imgArray.push(loadImage("apple.jpg"));
    imgArray.push(loadImage("peach.jpg"));
    imgArray.push(loadImage("pear.jpg"));
    imgArray.push(loadImage("pineapple.jpg"));
    imgArray.push(loadImage("strawberry.jpg"));
    
    fruit = imgArray[floor(random(imgArray.length))];

    song = loadSound('FruitSalad.mp3');

}

function setup() {
    noLoop();
    let cnv = createCanvas(500, 500);
    cnv.mousePressed(canvasPressed);
    noLoop();
    textFont('Comic Sans');

}

function canvasPressed() {

    if(!isPlaying){
        song.play(0, 2, 1, 32);

        isPlaying = true;
    }
}

function draw() {
    background(245, 5, 5);
    bowl.resize(400, 0);
    image(bowl, 50, 200);

    fruit.resize(200, 0)
    image(fruit, 100, 100);

    fruit.resize(100, 0);
    image(fruit, 300, 150);

    fruit.resize(100, 0);
    image(fruit, 250, 75);

    textSize(45);
    text("Fruit Salad (click me)", 25, 75);
    textSize(60);
    text("Yummy Yummy", 100, 450)
}