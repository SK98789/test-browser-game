
const GEAR_LIST = {
    head:
    {
        emptyHead: {
            name: "Empty",
            protection: 0,
            value: 0,
            icon: "images/gear/no-helmet-edit.png",
            description: "You should get a hat."
        },
        dunceCap: {
            name: "Dunce Cap",
            protection: 0,
            value: 0,
            icon: "images/gear/dunce-cap.png",
            description: "The next best hat for intellectuals after the Fedora"
        }
    },
    body:
    {
        muddyClothes: {
            name: "Muddy Clothes",
            protection: 5,
            value: 5,
            icon: "images/gear/muddy-shirt-edit.png",
            description: "Maybe one day you could wash your clothes..."
        }
    },
    feet: {
        splitShoes: {
            name: "Split Shoes",
            protection: 3,
            value: 3,
            icon: "images/gear/damaged-boot-edit.png",
            description: "Painful, but better than nothing"
        },
        emptyShoes:
        {
            name: "Empty",
            protection: 0,
            value: 0,
            icon: "images/gear/empty-symbol.png",
            description: "Yikes, this hurts"
        }
    },
    equippable:
    {
        emptyEquip: {
            name: "Empty",
            protection: 0,
            value: 0,
            icon: "images/gear/empty-symbol.png",
            description: "Carrying stuff sounds like a real burden"
        }
    },
    food: [],
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
                    headGearIcon.src = GEAR_LIST["head"][gearName]["icon"];
                } else {
                    throw new Error("Head gear not found");
                }

                break;

            case 1:
                if (GEAR_LIST["body"][gearName]) {
                    bodyGearDisplay.textContent = GEAR_LIST["body"][gearName]["name"];
                    bodyGearIcon.src = GEAR_LIST["body"][gearName]["icon"];
                } else {
                    throw new Error("Body gear not found");
                }

                break;

            case 2:
                if (GEAR_LIST["feet"][gearName]) {
                    feetGearDisplay.textContent = GEAR_LIST["feet"][gearName]["name"];
                    feetGearIcon.src = GEAR_LIST["feet"][gearName]["icon"];
                } else {
                    throw new Error("Feet gear not found");
                }

                break;

            case 3:
                if (GEAR_LIST["equippable"][gearName]) {
                    equippedGearDisplay.textContent = GEAR_LIST["equippable"][gearName]["name"];
                    equippedGearIcon.src = GEAR_LIST["equippable"][gearName]["icon"];
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
        bodyGearDisplay.textContent = GEAR_LIST["body"][body]["name"];
        bodyGearIcon.src = GEAR_LIST["body"][body]["icon"];
        feetGearDisplay.textContent = GEAR_LIST["feet"][feet]["name"];
        feetGearIcon.src = GEAR_LIST["feet"][feet]["icon"];
        equippedGearDisplay.textContent = GEAR_LIST["equippable"][equipped]["name"];
        equippedGearIcon.src = GEAR_LIST["equippable"][equipped]["icon"];


    } catch {
        console.error("Failed to change all visuals");
    }
}