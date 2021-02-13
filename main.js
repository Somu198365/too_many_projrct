


Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:180
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snap()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("results").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>' ;
    });
}

console.log('ml5 wersion:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y2afZYXuB/model.jason',modelLoaded);

function modelLoaded() 
{
console.log('model Loaded');
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}