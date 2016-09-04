var userChoice
  , computerChoice;

function initGame() {
    var winner;

    userChoice = prompt("Do you choose rock, paper or scissors?");
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        console.log('Incorrect input:', userChoice);
        alert("You need to chooce rock, paper or scissors.");
        initGame();
        return;
    }
    computerChoice = Math.random();

    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    }

    winner = compare(userChoice, computerChoice);
    console.log(winner);
}

function compare(choice1, choice2) {
    console.log("Computer: " + choice2);
    console.log("You: " + choice1);
    if(choice1 === choice2) {
        console.log("The result is a tie! Let's break the tie...");
        initGame();
        return "result is a tie";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

initGame();
