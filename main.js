//https://teachablemachine.withgoogle.com/models/ML-Dyi-5u/
lion=0;
elephant=0;
panther=0;
horse=0;
function Startclassification(){
    navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ML-Dyi-5u/model.json',modelReady);
}
function modelReady(){

    classifier.classify(gotResults);
}
function gotResults(error,results){

    console.log('gotResults');

    r=Math.floor(Math.random()* 255)+1;
    g=Math.floor(Math.random()* 255)+1;
    b=Math.floor(Math.random()* 255)+1;
m
    document.getElementById("r").innerHTML='i can hear -'+results[0].label;
    document.getElementById("e").innerHTML='Confidence -'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("r").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("e").style.color="rgb("+r+","+g+","+b+")";

    i1=document.getElementById('ear');
    //i2=document.getElementById('2');
    //i3=document.getElementById('3');
    //i4=document.getElementById('4');

   if(results[0].label=="lion"){
    i1.src='roar.gif';
    lion=lion+1;
    //i2.src='b.jpg';
    //i3.src='c.jpg';
    //i4.src='d.jpg';
   }
    else if(results[0].label=="elephant"){
        //i1.src='a.jpg';
        i2.src='giphy.gif';
        elephant=elephant+1;
        //i3.src='c.jpg';
        //i4.src='d.jpg';    
    }
    else if(results[0].label=="panther"){
        //i1.src='a.jpg';
        //i2.src='b.jpg';
        i3.src='giphy (1).gif';
        panther=panther+1;
        //i4.src='d.jpg';
    }
    else if(results[0].label=="horse"){
        //i1.src='a.jpg';
        //i2.src='b.jpg';
        //i3.src='c.jpg';
        i4.src='tumblr.gif';
        horse=horse+1
      }
   }
