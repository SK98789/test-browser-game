let animationCounter = 0;
const runningFigure = document.getElementById("running-figure");
const runningMonster = document.getElementById("running-monster");
let chase;
var chaseEvent = function () {
    animationBar.style.visibility = "visible";
    runningFigure.style.left = `${runningFigure.offsetLeft + runningFigure.offsetWidth}px`;
    stepButton.addEventListener("click", moveFigure);
    chase = setInterval(runningFigureAnim, 100);
}

var healthUnlockedEvent = function () {

    healthDisplay.style.visibility = "visible";
    eventIsComplete = true;
    eventHasStarted = false;
}
let events = {
    "chaseEvent": chaseEvent,
    "healthUnlockedEvent": healthUnlockedEvent
}

function moveFigure() {
    runningFigure.style.left = `${runningFigure.offsetLeft + 10}px`;
}
function runningFigureAnim() {
    runningFigure.src = `images/figure-running/${animationCounter % 12 + 1}.png`
    runningMonster.src = `images/monster-running/${animationCounter % 9 + 1}.png`
    runningMonster.style.left = `${runningMonster.offsetLeft + 1}px`
    animationCounter += 1;
    if ((runningFigure.offsetLeft - runningMonster.offsetLeft) < 72) {
        clearInterval(chase);
        handleDeath({});
    }
    if (stepCounter >= 99) {
        clearInterval(chase);
        //Success Animation here
        eventIsComplete = true;
        eventHasStarted = false;
        stepButton.removeEventListener("click", moveFigure);
        animationBar.style.visibility = "hidden";
        setBackgroundImage("forest-background.jpg");
    }

}
