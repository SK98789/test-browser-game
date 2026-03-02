const headGearDisplay = document.getElementById("head-equipped");
const bodyGearDisplay = document.getElementById("body-equipped");
const feetGearDisplay = document.getElementById("feet-equipped");
const equippedGearDisplay = document.getElementById("equipped");
const headGearIcon = document.getElementById("helmet-icon");
const bodyGearIcon = document.getElementById("body-icon");
const feetGearIcon = document.getElementById("shoe-icon");
const equippedGearIcon = document.getElementById("equipped-icon");
const inventoryList = document.getElementById("inventory-list");

let answer = document.createElement("input");

let animationCounter = 0;
let eventCurrentDialogue;
const runningFigure = document.getElementById("running-figure");
const runningMonster = document.getElementById("running-monster");
const health = document.getElementById("health");
let chase;
var chaseEvent = function () {
    animationBar.style.visibility = "visible";
    runningFigure.style.left = `148px`;
    runningMonster.style.left = `20px`;
    console.log("figure: ");
    console.log(runningFigure.style.left);
    console.log("monster: ");
    console.log(runningMonster.offsetLeft);

    stepButton.addEventListener("click", moveFigure);
    chase = setInterval(runningFigureAnim, 100);
}

var stageTwoEvent = function () {
    localStorage.setItem("stage", "2");
    player.stage = 2;
    eventHasStarted = false;
}

var healthUnlockedEvent = function () {
    console.log("health");
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
var healToFull = function () {
    player.currenthealth = player.maxHealth;
    health.textContent = `${player.currenthealth} / ${player.maxHealth}`;
    eventHasStarted = false;
}

var useHealthPotion = function (event) {
    if (player.currenthealth <= player.maxHealth) {
        player.currenthealth = player.maxHealth;
        health.textContent = `${player.currenthealth} / ${player.maxHealth}`;
        inventoryList.removeChild(event.target);
    }
}

var gainHealthPotion = function () {
    player.inventory.items.push(GEAR_LIST.food.healthPotion);
    let healthIcon = document.createElement("img");
    healthIcon.src = GEAR_LIST.food.healthPotion.icon;
    healthIcon.classList.add("gear-icons", "item-card");
    healthIcon.addEventListener("click", useHealthPotion);
    inventoryList.appendChild(healthIcon);
    eventHasStarted = false;
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

var cottageFinalQ = function () {
    let inputForm = document.createElement("form");
    inputForm.onsubmit = cottageQuestionValidator;
    answer.setAttribute("type", "text");
    answer.setAttribute("name", "answer");
    let s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    inputForm.replaceChildren(answer, s);
    optionsBox.replaceChildren(inputForm);

}

function cottageQuestionValidator(event) {
    event.preventDefault();
    let soln = answer.value.toLowerCase();
    if (soln.indexOf("dark") !== -1 || soln.indexOf("night") !== -1) {
        soln = "darkness";
    } else if (soln.indexOf("candle") !== -1) {
        soln = "candle";
    }
    switch (soln) {
        case "toot":
        case "fart":
            narrationText.textContent = "Did I not just say 'cannot be smelt'???";
            break;
        case "darkness":
            iterateEventDialogueTree(21);
            break;
        case "your husband":
            narrationText.textContent = "Incredibly based response, queen. Nevertheless, try again.";
            break;

        case "candle":
            narrationText.textContent = "Ok, you need to let the candle thing go now.";
            break;
        default:
            narrationText.textContent = "No, not quite. Try again";
            break;
    }
}

let events = {
    "chaseEvent": chaseEvent,
    "healthUnlockedEvent": healthUnlockedEvent,
    "cottageOptionalEvent": cottageOptionalEvent,
    "shoeTheft": shoeTheft,
    "dunceCap": dunceCap,
    "stageTwoEvent": stageTwoEvent,
    "cottageFinalQ": cottageFinalQ,
    "healToFull": healToFull,
    "gainHealthPotion": gainHealthPotion,

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

    if (eventCurrentDialogue["eventList"]) {
        eventCurrentDialogue.eventList.forEach(ev => {
            let eventName = events[ev];
            eventName();
        })
    }
    else if (eventCurrentDialogue.opts.length === 0) {
        eventHasStarted = false;
        stepButton.disabled = false;
    }

}


function moveFigure() {
    runningFigure.style.left = `${runningFigure.offsetLeft + 15}px`;
}
function runningFigureAnim() {
    runningFigure.src = `images/figure-running/${animationCounter % 12 + 1}.png`
    if (animationCounter > 10) {
        runningMonster.src = `images/monster-running/${animationCounter % 9 + 1}.png`
        runningMonster.style.left = `${(runningMonster.offsetLeft + 5) * 1.01}px`

    }
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
