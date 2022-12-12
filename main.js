var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
p=document.getElementById('textbox');

function start() {
    p.innerHTML="";
    recognition.start();
}
recognition.onresult=function(q){
    console.log(q);
    x=q.results[0][0].transcript;
    p.innerHTML=x;
    console.log(x);
    if (x=="cake") {
        speak();
        console.log("Taking selfie"); 
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    s="TAKING YOUR SELFIE IN 5 SECONDS";
    var r = new SpeechSynthesisUtterance(s);
    synth.speak(r);
    Webcam.attach( '#camera' );
    setTimeout(function(){
        take_selfie();
        Save1();
    },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function take_selfie() {
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="pic" src="'+data_uri+'"/>';
    } );
 }

 function Save1() {
    po=document.getElementById("a");
    op=document.getElementById("pic").src;
    po.href=op;
    po.click();
 }