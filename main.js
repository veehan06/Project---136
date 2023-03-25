status = "";
input = "";
function preload(){

}
function setup(){
canvas = createCanvas(480, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(480, 380);
video.hide();
}
function start(){
    objectdetector = objectDetector('cocossd', modelLoaded);
    document.getElementsByClassName("status").innerHTML = "Status = Detecting Object";
    input = document.getElementById("name").value;
    console.log(input)
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    image(video, 0, 0, 480, 380);
}