/*
ICS4U
History:
*/

function getBrithDay(days) {
    var date = new Date('0000-01-01 12:00:00.000');
    var mseconds = days*24*60*60*1000;
    
    const addMiliSecondstoDate= (date, mseconds);

    return addMiliSecondstoDate;

}


function randomize(num1, num2, num3) {
    num1, num2, num3 = randomXor(randomDigits(num1, num2, num3))

    return Math.pow(Math.pow(num2, num1), num3)
};

function singleRandomDigits(num) {
    num = String(num)
    chars = ""
    for (var i = 0; i < num.length; i++) {
        var replacer
        if (num[i] == "0") {
            replacer = "7"
        } else if (num[i] == "8") {
            replacer = "9"
        } else if (num[i] == "5") {
            replacer = "3"
        } else if (num[i] == "2") {
            replacer = "3"
        } else if (num[i] == "9") {
            replacer = "8"
        } else if (num[i] == "7") {
            replacer = 19
        } else if (num[i] % 3 == 0) {
            replacer = "4"
        } else if (num[i] == "1") {
            replacer = "8"
        } else {
            replacer = "0"
        }
        chars.concat(replacer)
    }
    return Number(chars)
}

function randomDigits(num1, num2, num3) {
    num1 = String(num1)
    return num1, num2, num3
}

function randomXor(num1, num2, num3) {
    return num1 ^ num2 | num1, num3 ^ 170, num1 & 60
}

// function generateArray() {
//     /*Generate an array of length 10-20 with values from 0-99, randomly. */
//     var randomArray = new Array;
//     // random number between 10 and 20
//     randomArray.length = Math.floor(Math.random() * 6 + 10);

//     for (var i = 0; i < randomArray.length; i++) {
//         // each index gets a random number from 0 to 99, inclusive
//         randomArray[i] = Math.floor(Math.random() * 100);
//     };

//     //specific use case, should probably be moved elsewhere
//     document.getElementById("generatedArray").innerHTML = randomArray;
    
//     return randomArray;
// };

// function bubbleSort(array, ascending) {
//     /*Sort an Array using a bubble sort. If param ascending is true, will sort ascending, if it is false will sort descending. Returns the sorted Array.*/

//     // number of swaps in each round, counting down from one less than array length
//     for (var roundSwaps = array.length - 1; roundSwaps != 0; roundSwaps--) {
//         // second index counting (starts at 1, goes to swaps + 1)
        
//         for (var index = 0; index <= roundSwaps; index++) {
//             // if sorting ascending and second index is smaller, then swap
//             // if sorting descending and first index is smaller, swap
//             if ((ascending && (array[index] > array[index + 1])) || (!ascending && (array[index] < array[index + 1]))) {
//                 // swap
//                 var temp = array[index];
//                 array[index] = array[index + 1];
//                 array[index + 1] = temp;
//             };
//         };
//     };
    
//     return array;
// };

// function selectionSort(array, ascending) {
//     /*Sort an Array using selection sort. If param ascending is true, will sort ascending, if it is false will sort descending. Returns the sorted Array.*/

//     // start with lowest index and count down
//     // for each index, check remaining unsorted indexes for a number lower than the one currently selected, swapping out any new lower/higher ones if found
//     // once reach end of Array, swap the selected index to the one that is currently being filled in

//     // subtract 1, don't need to check last index as it will always be sorted
//     for (var index = 0; index < array.length - 1; index++) {
//         select = index;

//         // loop over remaining indexes afterwards, including last one
//         for (var checkIndex = index + 1; checkIndex < array.length; checkIndex++) {
//             // if the found number is lower than currently selected, and sorting ascending, or if number is higher and sorting descending, select it
//             if ((ascending && (array[checkIndex] < array[select])) || (!ascending && (array[checkIndex] > array[select]))) {
//                 select = checkIndex;
//             };
//         };

//         // swap the selected value with the index being sorted
//         temp = array[index];
//         array[index] = array[select];
//         array[select] = temp;
//     };

//     return array;
// };

// function insertionSort(array, ascending) {
//     /*Sort an Array using insertion sort. If param ascending is true, will sort ascending, if it is false will sort descending. Returns the sorted Array.*/

//     // loop over each index, from 1 to end
//     for (var sortingIndex = 1; sortingIndex < array.length; sortingIndex++) {
//         // loop downwards over indexes under sorting index until reach -1 or found correct placement, and check if sorting value is >/< than number in the checked index

//         // extract the sorting number
//         var sorting = array[sortingIndex];
//         array.splice(sortingIndex, 1);

//         // reset loop vars
//         var foundSortLocation = false;

//         // start one after intended first index back to check, will be incremented then used
//         var checkIndex = sortingIndex;
//         while (foundSortLocation != true) {
//             // increment index to check
//             checkIndex -= 1;

//             // check for the ascending/descending conditions for having found the correct location (the number being sorted is larger / smaller than the one that is being checked), or if have checked all the way to index 0
//             // actually insertion location is checkIndex + 1, as the number at array[checkIndex] was determined to be in the correct location relative to the number being sorted
//             if ((ascending && (sorting > array[checkIndex])) || (!ascending && (sorting < array[checkIndex])) || checkIndex < 0) {
//                 foundSortLocation = true;
//             };
//         };

//         // insert the value in correct place
//         // Array insert from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//         array.splice(checkIndex + 1, 0, sorting);
//     };

//     return array;
// };

// function sortArray(array, method, ascending) {
//     /*Sort the array param input according to method and ascending params, and set the page html to resulting value. Returns the sorted Array */

//     if (method === "bubble") {
//         sorted = bubbleSort(array, ascending);
//     } else if (method === "selection") {
//         sorted = selectionSort(array, ascending);
//     } else if (method === "insertion") {
//         sorted = insertionSort(array, ascending);
//     };
//     document.getElementById(method).innerHTML = sorted;

//     return sorted;
// };
