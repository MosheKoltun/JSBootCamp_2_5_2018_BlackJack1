var firstPlayerSum = 0;
var secondPlayerSum = 0;
var player1Turn = true;
var player2Turn = false;
var player1Stay = false;
var player2Stay = false;

function drawFunctionPlayer1() {
    if (!player1Turn) {
        return;
    }
    if (player1Stay) {
        return;
    }
    document.getElementById("Draw1Button").disabled = true;
    var randomValue = Math.floor(Math.random() * 14) + 1;
    firstPlayerSum += randomValue;
    document.getElementById("PlayerOneCards").innerHTML = firstPlayerSum;
    player1Turn = false;
    player2Turn = true;
    document.getElementById("Draw2Button").disabled = false;
}

function drawFunctionPlayer2() {
    if (!player2Turn) {
        return;
    }
    if (player2Stay) {
        return;
    }
    document.getElementById("Draw2Button").disabled = true;
    var randomValue = Math.floor(Math.random() * 14) + 1;
    secondPlayerSum += randomValue;
    document.getElementById("PlayerTwoCards").innerHTML = secondPlayerSum;
    player1Turn = true;
    player2Turn = false;
    document.getElementById("Draw1Button").disabled = false;
}

function stayFunctionPlayer1() {
    document.getElementById("Stay1Button").disabled = true;
    player1Stay = true;
    if (player1Stay && player2Stay) {
        checkWhoWon();
    }
}

function stayFunctionPlayer2() {
    document.getElementById("Stay2Button").disabled = true;
    player2Stay = true;
    if (player1Stay && player2Stay) {
        checkWhoWon();
    }
}

function checkWhoWon() {
    var resultParagraph = document.getElementById("result");
    if (firstPlayerSum > 21 && secondPlayerSum <=21) {
        resultParagraph.innerHTML = "player 2 Won!";
    } else if (secondPlayerSum > 21 && firstPlayerSum <=21) {
        resultParagraph.innerHTML = "player 1 Won!";
    } else if (firstPlayerSum > 21 && secondPlayerSum > 21) {
        resultParagraph.innerHTML = "Both Lose!";
    } else if (firstPlayerSum == secondPlayerSum) {
        resultParagraph.innerHTML = "Teko";
    } else if  (firstPlayerSum > secondPlayerSum) {
        resultParagraph.innerHTML = "player 1 Won!";
    } else {
        resultParagraph.innerHTML = "player 2 Won!";
    }
}