console.log("hello world")
console.log(" ")

function getComputerChoice()    {
    let a = Math.random();
    if (a <= 0.33) {
        x = "rock";
    }   else if (0.33 < a && a <= 0.66)   {
        x = "paper";
    }   else{
        x = "scissors";
    }
    return x;
}

function getHumanChoice()   {
    let b = prompt("Choose rock, paper, or scissors:").toLowerCase();
    if (b==="rock") {
        y = "rock";
    }   else if (b==="paper") {
        y = "paper";
    }   else if (b==="scissors")  {
        y = "scissors";
    }   else{
        alert("try again");
        return getHumanChoice();
    }
    return y;
}

function playRound(x, y)    {
    if (x === y)    {
        console.log('Draw!', x, 'ties ', y, '.');
    } else if (
        x === "paper" && y === "rock" ||
        x === "rock" && y === "scissors" ||
        x === "scissors" && y === "paper"
    )   {
        console.log('You Win!', x, 'beats', y, '.');
        return "win";
    } else{
        console.log('You Lose!', x, 'lose to', y, '.');
        return 'lose';        
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 1; i <= 5; i++)    {

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        let result = playRound(humanSelection, computerSelection);

        console.log("Computer: ", computerSelection);
        console.log("User: ", humanSelection);

        if (result === "win")   {
            humanScore += 1
        } else if (result === "lose")   {
            computerScore += 1
        }
        console.log("Your Score", humanScore, "Computer Score", computerScore)
        console.log('');
    }

    if (humanScore < computerScore) {
        console.log('You lost! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
    } else if (humanScore > computerScore) {
        console.log('You win! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
    } else {
        console.log('Draw! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
    }
}

playGame()