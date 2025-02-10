
let createPath;
let line = {x1: 0, y1: 0, x2: 0, y2: 0};
let state = 0;
let lines = [];

let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", window.innerWidth);
createSVG.setAttribute("height", window.innerHeight);
document.getElementsByTagName("body")[0].appendChild(createSVG);


window.addEventListener("mousedown", function(e){
    if (state == 0) {
        createPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        createSVG.appendChild(createPath);
        line.x1 = e.pageX;
        line.y1 = e.pageY;
        state = 1;
    } 
})

window.addEventListener("mousemove", function(e){
    if (state == 1){
        createPath.setAttribute("d", "M " + line.x1 + " " + line.y1 + " L " + e.pageX + " " + e.pageY);
        line.x2 = e.pageX;
        line.y2 = e.pageY;
    }
})

window.addEventListener("mouseup", function(e){ 
    state = 0;
    lines.push({...line});  
    console.log(lines);
})

