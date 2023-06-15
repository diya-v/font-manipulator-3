leftWrist_X =0;
rightWrist_X =0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(600,500);
    canvas.position(600,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet model is loaded");
}

function gotPoses(results){
    console.log(results);
    
    leftWrist_X = results[0].pose.leftWrist.x;
    rightWrist_X = results[0].pose.rightWrist.x;

    difference = floor(leftWrist_X - rightWrist_X);
}

function draw(){
    background('orange');
    textSize(difference);
    fill('blue');
    stroke('blue');
    text('diya', 100, 250);
    document.getElementById("font").innerHTML="The Font Size is "+ difference;
}
