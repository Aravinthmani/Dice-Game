//dice one
var randomNumber = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice"+randomNumber+".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImage);

//dice two
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImage1);

// conditions for dice

if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
 