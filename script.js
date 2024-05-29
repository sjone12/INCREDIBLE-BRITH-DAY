/*
ICS4U
History:
*/

function setBrithDay(hex) {
    var date = getBrithDay(hex)
    document.getElementById("date-display").innerHTML = date;
    // console.log(date)
    return
};

function getBrithDay(hex) {
    //https://www.30secondsofcode.org/js/s/add-minutes-hours-days-to-date
    //site referenced for this section of code
    var date = new Date('0101-01-01 12:00:00.000');
    var randomNum = randomize(getColourNums(hex));//*24*60*60*1000;
    while (randomNum > 999_000_000_000) {
        randomNum = parseInt(String(randomNum).slice(0, -1))
        // console.log(randomNum);
    }
    date.setTime(date.getTime() + randomNum * 1_000);
    return date;
};

function getColourNums(hex) {
    // console.log(["get nums", hex, hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7), parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)]);
    //from https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript
    return Array(Number(parseInt(hex.slice(1, 3), 16)), Number(parseInt(hex.slice(3, 5), 16)), Number(parseInt(hex.slice(5, 7), 16)));
};

function randomize(tuple) {
    var num1 = tuple[0];
    var num2 = tuple[1];
    var num3 = tuple[2];
    // console.log(["start randomize", num1, num2, num3]);
    var tuple = randomXor(randomDigits(Array(num1, num2, num3)));
    var num1 = tuple[0];
    var num2 = tuple[1];
    var num3 = tuple[2];
    // console.log(["end randomize", num1, num2, num3]);

    return num2 * num1 * num3;
};

function singleRandomDigits(num) {
    num = String(num);
    chars = "";
    for (var i = 0; i < num.length; i++) {
        var replacer;
        if (num[i] == "0") {
            replacer = "27";
        } else if (num[i] == "8") {
            replacer = "9";
        } else if (num[i] == "5") {
            replacer = "3";
        } else if (num[i] == "2") {
            replacer = "3";
        } else if (num[i] == "9") {
            replacer = "8";
        } else if (num[i] == "7") {
            replacer = "19";
        } else if (num[i] % 3 == 0) {
            replacer = "4";
        } else if (num[i] == "1") {
            replacer = "8";
        } else {
            replacer = "0";
        }
        var chars = chars.concat(replacer);
    }
    // console.log(["chars", chars])
    return parseInt(chars);
};

function randomDigits(tuple) {
    var num1 = String(tuple[0]);
    var num2 = String(tuple[1]);
    var num3 = String(tuple[2]);
    // console.log(["random digs", num1, num2, num3]);
    return Array(singleRandomDigits(num1), singleRandomDigits(num2), singleRandomDigits(num3));
};

function randomXor(tuple) {
    var num1 = tuple[0];
    var num2 = tuple[1];
    var num3 = tuple[2];
    return Array(63 * Number(num1 ^ num2 | num1) + 1, Number(31 * num3 ^ 7) + 1, 12 * Number(num1 & 6) + 1);
};


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
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
