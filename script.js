var box = document.getElementById("abc");




box.addEventListener("mouseover", function(event) {
    var width = window.innerWidth;
var height = window.innerHeight;
    var boxAttr = box.getBoundingClientRect();
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height,width,height);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});
function getNewPosition(boxWidth,boxHeight,width,height){
    var newX = Math.floor((Math.random() * width)  - boxWidth);
    var newY = Math.floor((Math.random() * height) - boxHeight);

   if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
}