const headGearDisplay = document.getElementById("head-equipped");
const bodyGearDisplay = document.getElementById("body-equipped");
const feetGearDisplay = document.getElementById("feet-equipped");
const equippedGearDisplay = document.getElementById("equipped");
const headGearIcon = document.getElementById("helmet-icon");
const bodyGearIcon = document.getElementById("body-icon");
const feetGearIcon = document.getElementById("shoe-icon");
const equippedGearIcon = document.getElementById("equipped-icon");

let animationCounter = 0;
let eventCurrentDialogue;
const runningFigure = document.getElementById("running-figure");
const runningMonster = document.getElementById("running-monster");
const health = document.getElementById("health");
let chase;
var chaseEvent = function () {
    animationBar.style.visibility = "visible";
    runningFigure.style.left = `${runningFigure.offsetLeft + runningFigure.offsetWidth}px`;
    stepButton.addEventListener("click", moveFigure);
    chase = setInterval(runningFigureAnim, 100);
}

var healthUnlockedEvent = function () {
    healthDisplay.style.visibility = "visible";
    health.textContent = `${player.currenthealth} / ${player.maxHealth}`
    eventHasStarted = false;
}
var shoeTheft = function () {
    player.inventory.feet = GEAR_LIST["feet"][1];
    changeGearVisual(2, "emptyShoes");
}

var dunceCap = function () {
    player.inventory.head = GEAR_LIST["head"][1];
    changeGearVisual(0, "dunceCap");
}

var cottageOptionalEvent = function () {
    stepButton.disabled = true;
    let button1 = document.createElement("button");
    button1.textContent = "Avoid the hut";
    button1.addEventListener("click", () => {
        narrationText.textContent = "The home appears normal enough, but the footprints seem a little *too* fresh. Best not take any chances."
        eventHasStarted = false;
        stepButton.disabled = false;
        optionsBox.replaceChildren();

    });
    let button2 = document.createElement("button");
    button2.textContent = "Approach the hut";
    button2.addEventListener("click", () => {
        iterateEventDialogueTree(0);
    });
    optionsBox.replaceChildren(button2, button1);
}


let events = {
    "chaseEvent": chaseEvent,
    "healthUnlockedEvent": healthUnlockedEvent,
    "cottageOptionalEvent": cottageOptionalEvent,
    "shoeTheft": shoeTheft,
    "dunceCap": dunceCap,

}

function iterateEventDialogueTree(n) {
    eventCurrentDialogue = COTTAGE_DIALOGUE[n];
    narrationText.textContent = eventCurrentDialogue.text;
    optionsBox.replaceChildren();
    eventCurrentDialogue.opts.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option.buttonText;
        btn.addEventListener("click", () => {
            iterateEventDialogueTree(option.directTo);
        })
        optionsBox.appendChild(btn);
    });
    if (eventCurrentDialogue.opts.length === 0) {
        if (eventCurrentDialogue["eventList"]) {
            eventCurrentDialogue.eventList.forEach(ev => {
                let eventName = events[ev];
                eventName();
            })
        }
        eventHasStarted = false;
        stepButton.disabled = false;
    }
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
    if (stepCounter >= 100) {
        clearInterval(chase);
        //Success Animation here
        eventHasStarted = false;
        stepButton.removeEventListener("click", moveFigure);
        animationBar.style.visibility = "hidden";
        setBackgroundImage("forest-background.jpg");
    }

}
