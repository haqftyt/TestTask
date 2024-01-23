var planet =document.getElementById('planet');
var clickhere=document.getElementById('clickhere');
var dayornight=document.getElementById('dayornight');
var satellite=document.getElementById('satellite');
clickhere.onclick=function(){
    planet.src='/img/moonImage.png';
    dayornight.innerHTML="Night";
    satellite.innerHTML="Moon";
}
