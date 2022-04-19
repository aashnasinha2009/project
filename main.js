
status1 = ""; 
object = [];

function preload(){
    
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video =createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    object_name = document.getElementById("object_name").value;

    document.getElementById("status").innerHTML = "Status : Detected Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
}