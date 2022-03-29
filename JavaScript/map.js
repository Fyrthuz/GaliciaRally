
function hideMap(){
    document.getElementById("map").style.visibility="hidden";
}  

function showMap(){
    document.getElementById("map").style.visibility="visible";
}  

document.getElementById("map").style.visibility="hidden";

document.getElementsByClassName("item").item(0).addEventListener('mouseover',showMap);

document.getElementsByClassName("item").item(0).addEventListener('mouseout',hideMap);


