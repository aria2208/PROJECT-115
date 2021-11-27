musX=0;
musY=0;


function preload(){
    mustache=loadImage('https://i.pinimg.com/564x/d3/c1/72/d3c172a4cb66495cdf11d66d8e0388c9.jpg');
}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
  if(results.length > 0 )
  {
      console.log(results);
      musX=results[0].pose.mus.x -15;
      musY=results[0].pose.mus.y -15;
  }
 

}

function draw(){
   image(video,0,0,300,300);
   image(mustache,musX,musY,30,30);
}

function snapshot(){
save('picture.png');
}

