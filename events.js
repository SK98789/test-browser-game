

let answer = document.createElement("input");

let animationCounter = 0;
let eventCurrentDialogue;
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

var getGold = function () {
    player.inventory.gold += 10;
    gold.textContent = player.inventory["gold"];

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
        removeFromArray(player.inventory.items, GEAR_LIST.food.healthPotion);
    }
}
function findItemFromSource(source) {
    for (let index = 0; index < player.inventory.items.length; index++) {
        if (source === player.inventory.items[index].icon) {
            return player.inventory.items[index];
        }
    }
    return null;
}
function swapEquip(itemSlot, itemToEquip, index) {
    removeFromArray(player.inventory.items, itemToEquip);
    if (player.inventory[itemSlot].name !== "Empty") {
        player.inventory.items.push(player.inventory[itemSlot]);
    }
    player.inventory[itemSlot] = itemToEquip;
    changeGearVisual(index, itemToEquip.gearName);


}

function equipItem(event) {
    try {
        console.log(event.target.src)
        let item = findItemFromSource(event.target.src);
        if (item !== null) {
            switch (item.type) {
                case "head":
                    swapEquip("head", item, 0);
                    break;
                case "body":
                    swapEquip("body", item, 1);
                    break;
                case "feet":
                    swapEquip("feet", item, 2);
                    break;
                case "equippable":
                    swapEquip("equippable", item, 3);
                    break;

                default:
                    throw new Error("error");
            }
        }

    }
    catch (e) {
        console.error(e);
    }
}
function addItemToInventory(category, item, effectOnClick) {
    player.inventory.items.push(GEAR_LIST[category][item]);
    let icon = document.createElement("img");
    icon.src = GEAR_LIST[category][item].icon;
    icon.title = GEAR_LIST[category][item].description;
    icon.classList.add("gear-icons", "item-card");
    icon.addEventListener("click", effectOnClick);
    inventoryList.appendChild(icon);
    eventHasStarted = false;

}

var gainHealthPotion = function () {
    addItemToInventory("food", "healthPotion", useHealthPotion);
}
var talkToBoy = function () {
    stepButton.disabled = true;
    iterateEventDialogueTree(0, AXE_BOY_DIALOGUE);
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
        iterateEventDialogueTree(0, COTTAGE_DIALOGUE);
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
            iterateEventDialogueTree(21, COTTAGE_DIALOGUE);
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

var pickUpAxe = function () {
    stepButton.disabled = true;
    let button1 = document.createElement("button");
    button1.textContent = "pick it up";
    button1.addEventListener("click", () => {
        narrationText.textContent = "You take the axe in your hand. After examining it, you find nothing particularly remarkable about the thing, other than it is clearly well-worn.";
        addItemToInventory("equippable", "axe", equipItem);
        AXE_BOY_DIALOGUE[3].opts[0] =
        {
            buttonText: "\"Yes, here!\"",
            directTo: 6
        };
        eventHasStarted = false;
        stepButton.disabled = false;
        optionsBox.replaceChildren();

    });
    let button2 = document.createElement("button");
    button2.textContent = "leave it";
    button2.addEventListener("click", () => {
        narrationText.textContent = "Something doesn't feel right about this strange axe. \n\nWho left it there?  \n\nYou know its the right choice to leave the axe behind.";
        AXE_BOY_DIALOGUE[3].opts[0] = {
            buttonText: "\"Yes, I saw it about 40 paces this way!\"",
            directTo: 4
        };
        eventHasStarted = false;
        stepButton.disabled = false;
        optionsBox.replaceChildren();
    });
    optionsBox.replaceChildren(button1, button2);
}

var removeAxe = function () {
    removeFromArray(player.inventory.items, GEAR_LIST.equippable.axe);
    inventoryList.removeChild(document.querySelector(`img[title=\"${GEAR_LIST["equippable"]["axe"].description}\"]`))

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
    "pickUpAxe": pickUpAxe,
    "talkToBoy": talkToBoy,
    "getGold": getGold,
    "removeAxe" : removeAxe

}

function iterateEventDialogueTree(n, conversation) {
    eventCurrentDialogue = conversation[n];
    narrationText.textContent = eventCurrentDialogue.text;
    optionsBox.replaceChildren();
    eventCurrentDialogue.opts.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option.buttonText;
        btn.addEventListener("click", () => {
            iterateEventDialogueTree(option.directTo, conversation);
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
