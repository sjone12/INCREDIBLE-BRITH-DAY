/*
ICS4U
History:
*/

function setBrithDay(hex) {
    let date = getBrithDay(hex)
    document.getElementById("date-display").innerHTML = date;
    // console.log(date)
    return
};

function getBrithDay(hex) {
    //https://www.30secondsofcode.org/js/s/add-minutes-hours-days-to-date
    //site referenced for this section of code
    let date = new Date('1501-02-17 12:05:30.021');
    let randomNum = randomize(getColourNums(hex));//*24*60*60*1000;
    while (randomNum > 999_000_000_000) {
        randomNum = parseInt(String(randomNum).slice(0, -1))
        // console.log(randomNum);
    }
    date.setTime(date.getTime() + randomNum * 1_000);
    return date;
};

function getColourNums(hex) {
    //from https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript
    return Array(parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16));
};

function randomize(tuple) {
    // console.log(["start randomize", num1, num2, num3]);
    var tuple = randomBitwiseOperations(randomDigits(tuple));
    // console.log(["end randomize", num1, num2, num3]);

    return tuple[0] * tuple[1] * tuple[2];
};

function singleRandomDigits(num) {
    num = String(num);
    chars = "";
    for (var i = 0; i < num.length; i++) {
        var replacer;
        if (num[i] == "0") {
            replacer = "2";
        } else if (num[i] == "8") {
            replacer = "9";
        } else if (num[i] == "5") {
            replacer = "3";
        } else if (num[i] == "2") {
            replacer = "3";
        } else if (num[i] == "9") {
            replacer = "8";
        } else if (num[i] == "7") {
            replacer = "1";
        } else if (num[i] % 3 == 0) {
            replacer = "4";
        } else if (num[i] == "1") {
            replacer = "8";
        } else {
            replacer = "0";
        }
        chars = chars.concat(replacer);
    }
    // console.log(["chars", chars])
    return parseInt(chars);
};

function randomDigits(tuple) {
    return Array(singleRandomDigits(tuple[0]), singleRandomDigits(tuple[1]), singleRandomDigits(tuple[2]));
};

function randomBitwiseOperations(tuple) {
    let num1 = tuple[0];
    let num2 = tuple[1];
    let num3 = tuple[2];
    return Array(63 * Number(num1 ^ num2 | num1) + 1, Number(31 * num3 ^ 7) + 1, 12 * Number(num1 & 6) + 1);
};
