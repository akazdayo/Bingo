var bingoLine = []
var bingoObj = []
var usedNumber = []

function randomButton() {
    let obj = document.getElementById("random_button");
    let number = shuffle();
    if (number != -1) {
        obj.innerText = number;
    }
    else {
        obj.innerText = "end";
    }
    let allNumber = [];
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            allNumber.push(bingoLine[i][j]);
        }
    }
    if (allNumber.includes(number) == true) {
        var index = allNumber.indexOf(number);
        //bingoObj[Math.floor(index / 5)][index % 5].innerText = "O";
        bingoObj[Math.floor(index / 5)][index % 5].style.color = "yellow";
    }
}

function shuffle() {
    if (usedNumber.length == 50) {
        return -1;
    }
    while (true) {
        let number = Math.floor(Math.random() * 50) + 1
        if (usedNumber.includes(number) == false) {
            usedNumber.push(number);
            return number;
        }
    }
}

function hole(number) {
    if (bingoObj[Math.floor(number / 5)][number % 5].textContent != "O") {
        bingoObj[Math.floor(number / 5)][number % 5].innerText = "O";
        bingoObj[Math.floor(number / 5)][number % 5].style.color = "yellow";
    }
    else {
        bingoObj[Math.floor(number / 5)][number % 5].innerText = bingoLine[Math.floor(number / 5)][number % 5];
        bingoObj[Math.floor(number / 5)][number % 5].style.color = "white";
    }
}

for (var i = 0; i < 5; i++) {
    if (i == 2) {
        bingoLine.push([shuffle(), shuffle(), "O", shuffle(), shuffle()]);
    }
    else {
        bingoLine.push([shuffle(), shuffle(), shuffle(), shuffle(), shuffle()]);
    }


    let tempObj = [];
    for (var j = 0; j < 5; j++) {
        let obj = document.getElementById("bingo" + String(i + 1) + "_" + String(j + 1));
        obj.innerText = bingoLine[bingoLine.length - 1][j];
        tempObj.push(obj);
    }
    bingoObj.push(tempObj);
}
usedNumber = [];