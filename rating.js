var rating=0
var b1=document.getElementById("btn1")
let b2=document.getElementById("btn2")
var b3=document.getElementById("btn3")
var b4=document.getElementById("btn4")
var b5=document.getElementById("btn5")
b1.onclick=function (){
rating=1;}
b2.onclick=function(){
rating=2;}
b3.onclick=function (){
rating=3;}
b4.onclick=function(){
rating=4;}
b5.onclick=function(){
    rating=5;}
function Submit()
{
let card=document.getElementById("card")
card.innerHTML=`<rating id="cc1">
<rating id="image2"> <img src="images/illustration-thank-you.svg" alt="illustration"></rating>
<rating id="information"><rating id="outofbox"> You selected ${rating} out of 5</rating></rating>

<rating id="topic" class="topic1"> Thank you!</rating>

<rating id="content"> We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!</rating>
</rating>`
}
