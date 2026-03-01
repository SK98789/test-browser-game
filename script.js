let stepCounter;
let currentDialogue;
let nextDialogue;
let nextDialogueIndex;
let isDying = false;
let eventHasStarted = false;
const animationBar = document.getElementById("animation-bar");
const stepsDisplay = document.getElementById("steps-display");
const steps = document.getElementById("steps");
const healthDisplay = document.getElementById("health-display");
const narrationText = document.getElementById("narration-text");
const optionsBox = document.getElementById("button-bar");
const stepButton = document.getElementById("step-button");
const inventoryBox = document.getElementById("inventory-box");

let inventory;

function takeStep() {
    stepCounter += 1;
    steps.textContent = stepCounter;
    if (stepCounter >= nextDialogue.steps) {
        moveNextDialogue();
    }
    if (currentDialogue !== undefined && "eventList" in currentDialogue && !eventHasStarted) {
        eventHasStarted = true;
        let eventName = events[currentDialogue.eventList[0]];
        eventName();
    }
};

stepButton.addEventListener("click", takeStep)

/**
 * All starting values needed to reset the game.
 */
function initializeStartingValues() {
    player.stage = 1;
    localStorage.setItem("stage", "1");
    stepCounter = 0;
    isDying = false;
    stepsDisplay.style.visibility = "hidden";
    healthDisplay.style.visibility = "hidden";
    stepButton.style.visibility = "hidden";
    stepButton.disabled = false;
    inventoryBox.style.visibility = "hidden";
    animationBar.style.visibility = "hidden";
    inventory = {
        head: GEAR_LIST["head"][0],
        body: GEAR_LIST["body"][0],
        feet: GEAR_LIST["feet"][0],
        equipped: GEAR_LIST["equippable"][0],
        items: []
    }
    setBackgroundImage("fog_landscape_stock.jpg");
}

function initializeSavedValues() {
    player.stage = localStorage.getItem("stage");
    switch (player.stage) {
        case "2":
            stepCounter = 100;
            steps.textContent = stepCounter;
            inventoryBox.style.visibility = "visible";
            stepsDisplay.style.visibility = "visible";
            animationBar.style.visibility = "hidden";
            healthDisplay.style.visibility = "hidden";
            stepButton.disabled = false;
            inventory = {
                head: GEAR_LIST["head"][0],
                body: GEAR_LIST["body"][0],
                feet: GEAR_LIST["feet"][0],
                equipped: GEAR_LIST["equippable"][0],
                items: []
            }
            nextDialogueIndex = 15;
            nextDialogue = linearDialogue[15];
            currentDialogue = linearDialogue[14];
            narrationText.textContent = linearDialogue[14].content;
            setBackgroundImage("forest-background.jpg");
            break;
    }
}

function main() {
    if (localStorage.length === 0 || localStorage.getItem("stage") === "1") {
        initializeStartingValues();
        introduction();
    }
    else {
        initializeSavedValues();

    }
}

function setBackgroundImage(url) {
    document.body.style.backgroundImage = `url(\"images/backgrounds/${url}\")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

function introduction() {
    narrationText.textContent = "You wake up on the ground in the mist. The waterlogged soil is unpleasant to rest on. \n You feel an overwhelming fear, as if you know not to linger in this place.";
    let button1 = document.createElement("button");
    button1.textContent = "stay";
    button1.addEventListener("click", () => {
        isDying = true;
        button1.disabled = true;
        narrationText.textContent = "\"It's probably nothing,\" you think to yourself. \n Why would an unknown bog in the mist be dangerous?";
        setTimeout(() => {
            if (isDying) {
                handleDeath({ "message": "You realize too little, too late that you are not alone in the mist. Everything goes dark." })
            }
        }, 5000);
    });
    let button2 = document.createElement("button");
    button2.textContent = "get up";
    button2.addEventListener("click", () => {
        //Cancel the timer if the user gets up within the time limit.
        isDying = false;
        narrationText.textContent = "You get yourself out of the mud. Your shoes are well-worn and the water soaks into your threadbare socks, but it feels better than laying in the swamp you seemingly passed out in.";
        optionsBox.replaceChildren();
        stepButton.style.visibility = "visible";
        inventoryBox.style.visibility = "visible";
        stepsDisplay.style.visibility = "visible";
    });
    optionsBox.replaceChildren(button1, button2);
    nextDialogue = linearDialogue[0];
    nextDialogueIndex = 0;

}

function moveNextDialogue() {
    narrationText.textContent = nextDialogue.content;
    currentDialogue = nextDialogue;
    nextDialogueIndex += 1;
    nextDialogue = linearDialogue[nextDialogueIndex];
}

function handleDeath(opt) {
    if (opt["message"]) {
        narrationText.textContent = opt["message"];
    } else {
        narrationText.textContent = "You have died."
    }
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "restart";
    restartBtn.addEventListener("click", restart);
    optionsBox.replaceChildren(restartBtn);
    stepButton.disabled = true;

}
function restart() {
    initializeStartingValues();
    introduction();
}

document.getElementById("restart-button").addEventListener("click", restart);

main();