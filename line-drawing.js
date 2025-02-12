
let createPath;
let line = {x1: 0, y1: 0, x2: 0, y2: 0};
let state = 0;
let lines = [];
let isLoggedIn = false;
const authButton = document.getElementById("AuthButton");
let targetElement = document.getElementById("draw-area");

let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", targetElement.scrollWidth);
createSVG.setAttribute("height", targetElement.scrollHeight);
targetElement.appendChild(createSVG);


window.addEventListener("mousedown", function(e){
    if (state == 0) {
        createPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        createSVG.appendChild(createPath);
        line.x1 = e.offsetX;
        line.y1 = e.offsetY;
        state = 1;
    } 
})

window.addEventListener("mousemove", function(e){
    if (state == 1){
        createPath.setAttribute("d", "M " + line.x1 + " " + line.y1 + " L " + e.offsetX + " " + e.offsetY);
        line.x2 = e.offsetX;
        line.y2 = e.offsetY;
    }
})

window.addEventListener("mouseup", function(e){ 
    state = 0;
    lines.push({...line});  
    console.log(lines);
})


function login() {
    fetch("http://localhost:5124/session/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify ({
            email: "greg@mail.com",
            password: "1234",
        })
    })
        .then(response => response.json())
        .then(data => console.log(data));
        isLoggedIn = true;
        authButton.innerText = "Logout";
}

function logout() {
    fetch("http://localhost:5124/session/logout", {
        headers: {
            "Accept": "application/json"
    }})
        .then(response => response.json())
        .then(data => console.log(data));
        isLoggedIn = false;
        
        authButton.innerText = "Login";

}

function saveGraph() {
    fetch("http://localhost:5124/graph", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify ({
            id: "34",
            lines: lines
        })
    })
        .then(response => response.json())
        .then(data => console.log(data));
}

document.getElementById("SaveGraph").addEventListener("click", saveGraph);

document.getElementById("RemoveGraph").addEventListener("click", () => {
    createSVG.remove();
});

document.getElementById("RestoreGraph").addEventListener("click", () => {
    targetElement.appendChild(createSVG);
});

authButton.addEventListener("click", () => {
    isLoggedIn ? logout() : login();
});