console.log("the javascript file is connected and working ;)")


var circle = document.getElementById("circle")
var upbtn = document.getElementById("upbtn")
var dwnbtn = document.getElementById("dwnbtn")

var rotateValue = circle.style.transform;

var rotateSum;

var i
list = [circle,upbtn,dwnbtn,rotateSum,rotateValue]
for(i = 0; i<5;i++){
    console.log(list[i]);
}

upbtn.onclick = function(){
    console.log("this functions is working")
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
