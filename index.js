var randomNumber1= Math.floor(Math.random()*6+1);
var randomdiceimage= "dice"+randomNumber1 +".png";

var randomImageSource="images/"+randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2= Math.floor(Math.random()*6+1);
var randomdiceimage1= "dice"+randomNumber2 +".png";

var randomImageSource1="images/"+randomdiceimage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);


if(randomNumber2>randomNumber1)
{
    document.querySelector('h1').innerHTML="Refresh Me<br> Player1 wins.🎉";
}
else{
    document.querySelector('h1').innerHTML="Refresh Me<br> Player2 wins.🎉";
}