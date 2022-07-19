song1 = "";
song2 = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload(){
    song1 = loadSound("Beliver.mp3");
    song2 = loadSound("Old_Town_Road.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(){
    console.log("modelLoaded");
}
function play(){
    song1.play();
    song2.play();
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreleftWrist = results[0].pose.keypoints[9].score;
        scorerightWrist = results[0].pose.keypoints[10].score;
        leftWristx = results[0].pose.leftWrist.x;
        console.log(scoreleftWrist)
        leftWristy = results[0].pose.leftWrist.y;

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
    }