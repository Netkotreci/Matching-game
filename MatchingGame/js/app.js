var initialTime = 10;
var initialLevel = 1;
var numberOfFaces = 5;
var count = 0;
var points = 0;

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var flexContainer = document.getElementById('flex-container');
var timeBox = document.getElementById('time');
var levelBox = document.getElementById('level');
var pointBox = document.getElementById('points');
var startBtn = document.getElementById('start-game');
var leftSide = document.getElementById('left-side');
var body = document.getElementByName('body')[0];


timeBox.innerHTML = initialTime;
timeBox.innerHTML = initialLevel;
timeBox.innerHTML = points;

window.addEventListener("load", setWindow);
startBtn.onclick = function (e) {
    e.preventDefault();
    startGame();
}

function setWindow() {
    flexContainer.style.height = windowHeight + 'px';
}

function startGame() {
    resetInitial();
    generateFaces
    cloneFaces
}


function resetInitial() {
    initialTime = 10;
     initialLevel = 1;
     numberOfFaces = 5;
     count = 0;
     points = 0;
}

function resetValue(time, level, points) {
    timeBox.innerHTML = time;
    timeBox.innerHTML = level;
    timeBox.innerHTML = points;
}

function generateFaces() {
    while (count < mumberOffFaces) {
        var randomTop = Math.random() * (windowHeight - 200);
        randomTop = Math.floor(randomTop);
        var randomLeft = Math.random() * ((windowWidth / 2) - 100);
        randomLeft = Math.floor(randomLeft);
        var face = document.createElement('img');
        face.src = 'img/smile.png';
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        leftSide.appendChild(face);
            count++;
        console.log(randomTop);
    }
}

function cloneFaces() {
    var leftSideImages = leftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    leftSideImages.removeAttribute('id');
    rightSide.appendChild(leftSideImages);
}
