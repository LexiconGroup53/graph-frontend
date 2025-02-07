
let xOrigin;
let yOrigin;
let createPath;
let line = {x1: 0, y1: 0, x2: 0, y2: 0};
let state = 0;
let lines = [];

let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", window.innerWidth);
createSVG.setAttribute("height", window.innerHeight);
document.getElementsByTagName("body")[0].appendChild(createSVG);
console.log(window);





window.addEventListener("mousedown", function(e){
    if (state == 0) {
        
        xOrigin = e.pageX;
        yOrigin = e.pageY;
        line.x1 = xOrigin;
        line.y1 = yOrigin;
        state = 1;
    } 
})

window.addEventListener("mouseover", function(e){
    if (state == 1){
        createPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        line.x2 = e.pageX;
        line.y2 = e.pageY;
        createPath.setAttribute("d", "M " + xOrigin + " " + yOrigin + " L " + e.pageX + " " + e.pageY);
        createSVG.appendChild(createPath);
        state = 2;
    } else if (state == 2){
        line.x2 = e.pageX;
        line.y2 = e.pageY;
        createPath.setAttribute("d", "M " + xOrigin + " " + yOrigin + " L " + e.pageX + " " + e.pageY);
    }
})

window.addEventListener("mouseup", function(e){
    if (state == 2){
        state = 0;
        lines.push(line);
    }
    
})

