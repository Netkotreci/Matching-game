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
    clearWindows();
    generateFaces˙();
    cloneFaces();
    counteer(intialTime);
}

function counter(time) {
    startBtn.style.opacity = 0.5;
    atartBtn.onclick = null;

    var loop = seInterval(counting, 1000);
    function counting() {
        time--;
        timeBox.innerHTML = time;
        if (time < 0) {
            clearInterval(loop);
            var reset = confirm("Game Over!\n\n" + "Your score is: " + points + "\nOn level: " + initialLevel + "\n\nDo you want play again?");
            if (restart) {
                startGme();
            } else {
                body.onclick = null;
                lefASide.lastChild.onclick = null;
                    resetInitial();
                    clearWindows();
                    startBtn.style.opacity = 1;
                    startBtn.onclick = function () {
                        startGame();
                    };
                }
            } else {
                leftSide.lastChild.onclick = function (event) {
                    event.stopPropagation();
                    clearInterval(loop);
                    numberOfFaces += 5;
                    intialLevel++;
                    points = points + (2 * initialLevel, points);
                    time = time + (initialTime * (initialLevel / 2));
                    resetValue();
            }
    }
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

function clearWindows() {
    while (leftSide.firstChild) {
        leftSide.removeChild(leftSide.firstChild);
    }
    while (rightSide.firstChild) {
        rightSide.removeChild(rightSide.firstChild);
    }
