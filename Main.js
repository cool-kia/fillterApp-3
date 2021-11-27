mustacheX = 0;
mustacheY = 0;

function preload ()
{
    mustach = loadImage ('https://i.postimg.cc/QtSTsT2W/mustache.jpg');
}

function setup ()
{
    canvas = createCanvas (300,300);
    canvas.center();
    video = createCapture (VIDEO);
    video.size (300,300);
    video.hide ();

    poseNet.on ('pose' , gotPoses);
    poseNet = ml5.poseNet (video,modelLoaded);
}

function draw ()
{
    image (video, 0, 0, 300, 300);
}

function take_snapshot ()
{
    save ('ClownFace.png');
}

function modelLoaded ()
{
    console.log ('model loaded')
}

function gotPoses (results)
{
    if (results.lenght > 0)
    {
        console.log (results);
        console.log ("nose x =" + results [0]. pose.nose.x);
        console.log ("nose y =" + results [0]. pose.nose.y);
    }
}