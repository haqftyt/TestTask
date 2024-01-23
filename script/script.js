var planet =document.getElementById('planet');
var clickhere=document.getElementById('clickhere');
var dayornight=document.getElementById('dayornight');
var satellite=document.getElementById('satellite');
clickhere.onclick=function(){
    planet.src='https://assets.stickpng.com/images/58f9fd7b0ed2bdaf7c128329.png';
    dayornight.innerHTML="Night";
    satellite.innerHTML="Moon";
}
