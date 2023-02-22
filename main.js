function preload() {
    clownnose = loadImage("moustache.png")    
    }
    
    function setup() {
        canvas = createCanvas(300, 300);
        canvas.position(525, 150);
        video = createCapture(VIDEO);
        video.size(300, 300);
        video.hide();
    
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded() {
        console.log('PoseNet Is Initialized')
    }
    
    function draw() {
        image(video, 0, 0, 300, 300);
        image(clownnose, nosex, nosey, 100, 30)
    }
    
    function take_snapshot() {
        save('myFilterImage.png');
    }
    
    nosex = 0;
    nosey = 0;
    
    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
            nosex = results[0].pose.nose.x - 50;
            nosey = results[0].pose.nose.y;
        }
    }