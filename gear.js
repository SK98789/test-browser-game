
const GEAR_LIST = {
    head:
    {
        emptyHead: {
            name: "Empty",
            gearName: "emptyHead",
            protection: 0,
            value: 0,
            type: "head",
            icon: "images/gear/no-helmet-edit.png",
            description: "You should get a hat."
        },
        dunceCap: {
            name: "Dunce Cap",
            gearName: "dunceCap",
            protection: 0,
            value: 0,
            type: "head",
            icon: "images/gear/dunce-cap.png",
            description: "The next best hat for intellectuals after the Fedora"
        }
    },
    body:
    {
        muddyClothes: {
            name: "Muddy Clothes",
            gearName: "muddyClothes",
            protection: 5,
            value: 5,
            type: "body",
            icon: "images/gear/muddy-shirt-edit.png",
            description: "Maybe one day you could wash your clothes..."
        }
    },
    feet: {
        splitShoes: {
            name: "Split Shoes",
            gearName: "splitShoes",
            protection: 3,
            value: 3,
            type: "feet",
            icon: "images/gear/damaged-boot-edit.png",
            description: "Painful, but better than nothing"
        },
        repairedShoes:
        {
            name: "Plain Shoes",
            gearName: "repairedShoes",
            protection: 5,
            value: 10,
            type: "feet",
            icon: "images/gear/icon_22.png",
            description: "Ah, there is nothing more luxurious than shoes with soles"
        },
        emptyShoes:
        {
            name: "Empty",
            gearName: "emptyShoes",
            protection: 0,
            value: 0,
            type: "feet",
            icon: "images/gear/empty-symbol.png",
            description: "Yikes, this hurts"
        }
    },
    equippable:
    {
        emptyEquip: {
            name: "Empty",
            gearName: "emptyEquip",
            protection: 0,
            value: 0,
            type: "equippable",
            icon: "images/gear/empty-symbol.png",
            description: "Carrying stuff sounds like a real burden"
        },
        axe: {
            name: "Well-Worn Axe",
            gearName: "axe",
            protection: 0,
            value: 0,
            type: "equippable",
            icon: "images/gear/icon_52.png",
            description: "Quite dull for something used to cut wood"
        }
    },
    food: {
        healthPotion: {
            name: "Health Potion",
            gearName: "healthPotion",
            event: "healToFull",
            value: 100,
            type: "food",
            icon: "images/gear/icon_86.png",
            description: "Heals you in mysterious ways"
        }
    },
    other: []
}
/**
 * 
 * @param {int} index : 0 = head gear, 1 = body gear, 2 = foot gear, 3 = equippable gear
 * @param {string} gearName : name of the gear
 */
function changeGearVisual(index, gearName) {
    try {
        switch (index) {
            case 0:
                if (GEAR_LIST["head"][gearName]) {
                    headGearDisplay.textContent = GEAR_LIST["head"][gearName]["name"];
                    headGearDisplay.title = GEAR_LIST["head"][gearName]["description"];
                    headGearIcon.title = GEAR_LIST["head"][gearName]["description"];
                    headGearIcon.src = GEAR_LIST["head"][gearName]["icon"];
                } else {
                    throw new Error("Head gear not found");
                }

                break;

            case 1:
                if (GEAR_LIST["body"][gearName]) {
                    bodyGearDisplay.textContent = GEAR_LIST["body"][gearName]["name"];
                    bodyGearIcon.src = GEAR_LIST["body"][gearName]["icon"];
                    bodyGearDisplay.title = GEAR_LIST["body"][gearName]["description"];
                    bodyGearIcon.title = GEAR_LIST["body"][gearName]["description"];
                } else {
                    throw new Error("Body gear not found");
                }

                break;

            case 2:
                if (GEAR_LIST["feet"][gearName]) {
                    feetGearDisplay.textContent = GEAR_LIST["feet"][gearName]["name"];
                    feetGearIcon.src = GEAR_LIST["feet"][gearName]["icon"];
                    feetGearDisplay.title = GEAR_LIST["feet"][gearName]["description"];
                    feetGearIcon.title = GEAR_LIST["feet"][gearName]["description"];
                } else {
                    throw new Error("Feet gear not found");
                }

                break;

            case 3:
                if (GEAR_LIST["equippable"][gearName]) {
                    equippedGearDisplay.textContent = GEAR_LIST["equippable"][gearName]["name"];
                    equippedGearIcon.src = GEAR_LIST["equippable"][gearName]["icon"];
                    equippedGearDisplay.title = GEAR_LIST["equippable"][gearName]["description"];
                    equippedGearIcon.title = GEAR_LIST["equippable"][gearName]["description"];
                } else {
                    throw new Error("Head gear not found");
                }
                break;

        }

    }
    catch (e) {
        console.error(e);

    }

}
/**
 * 
 * @param {string} head : the name of the head gear to switch to 
 * @param {string} body : the name of the body gear to switch to 
 * @param {string} feet : the name of the foot gear to switch to 
 * @param {string} equipped : the name of the equipped gear to switch to 
 */
function changeAllGearVisuals(head, body, feet, equipped) {
    try {
        headGearDisplay.textContent = GEAR_LIST["head"][head]["name"];
        headGearIcon.src = GEAR_LIST["head"][head]["icon"];
        headGearDisplay.title = GEAR_LIST["head"][head]["description"];
        headGearIcon.title = GEAR_LIST["head"][head]["description"];
        bodyGearDisplay.textContent = GEAR_LIST["body"][body]["name"];
        bodyGearIcon.src = GEAR_LIST["body"][body]["icon"];
        bodyGearDisplay.title = GEAR_LIST["body"][body]["description"];
        bodyGearIcon.title = GEAR_LIST["body"][body]["description"];
        feetGearDisplay.textContent = GEAR_LIST["feet"][feet]["name"];
        feetGearIcon.src = GEAR_LIST["feet"][feet]["icon"];
        feetGearDisplay.title = GEAR_LIST["feet"][feet]["description"];
        feetGearIcon.title = GEAR_LIST["feet"][feet]["description"];
        equippedGearDisplay.textContent = GEAR_LIST["equippable"][equipped]["name"];
        equippedGearIcon.src = GEAR_LIST["equippable"][equipped]["icon"];
        equippedGearDisplay.title = GEAR_LIST["equippable"][equipped]["description"];
        equippedGearIcon.title = GEAR_LIST["equippable"][equipped]["description"];
    } catch(e) {
        console.error(`Failed to change all visuals: ${e}`);
    }
}