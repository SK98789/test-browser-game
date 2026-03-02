/**
 * Removes the first instance of item in the provided array without causing a hole.
 * @param {Array} array 
 * @param {*} item 
 */
function removeFromArray(array, item) {
    if (array[array.length - 1] === item) {
        array.pop();
    }
    else {
        let found = false;
        for (let index = 0; index < array.length - 1; index++) {
            if (array[index] === item && !found) {
                found = true;
            }
            if (found) {
                array[index] = array[index + 1];
            }
        }
        if (found) {
            array.pop();
        }

    }

}