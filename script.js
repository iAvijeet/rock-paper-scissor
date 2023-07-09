// function getComputerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
//   }
  
//   function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
  
//     if (
//       (playerSelection === 'rock' && computerSelection === 'scissors') ||
//       (playerSelection === 'paper' && computerSelection === 'rock') ||
//       (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//       return 'You win! ' + playerSelection + ' beats ' + computerSelection;
//     } else if (
//       (computerSelection === 'rock' && playerSelection === 'scissors') ||
//       (computerSelection === 'paper' && playerSelection === 'rock') ||
//       (computerSelection === 'scissors' && playerSelection === 'paper')
//     ) {
//       return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
//     } else {
//       return "It's a tie!";
//     }
//   }
  
//   function game() {
//     let playerScore = 0;
//     let computerScore = 0;
  
//     for (let i = 0; i < 5; i++) {
//       const playerSelection = prompt('Enter rock, paper, or scissors:');
//       const computerSelection = getComputerChoice();
//       const result = playRound(playerSelection, computerSelection);
  
//       console.log(result);
  
//       if (result.startsWith('You win!')) {
//         playerScore++;
//       } else if (result.startsWith('You lose!')) {
//         computerScore++;
//       }
//     }
  
//     if (playerScore > computerScore) {
//       console.log('You win the game!');
//     } else if (playerScore < computerScore) {
//       console.log('You lose the game!');
//     } else {
//       console.log("It's a tie!");
//     }
//   }
  
//   game();
  




//NEW LOGIC
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  } else {
    return "It's a tie!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  const startButton = document.getElementById('startButton');
  const gameContainer = document.getElementById('gameContainer');
  const rockButton = document.getElementById('rockButton');
  const paperButton = document.getElementById('paperButton');
  const scissorsButton = document.getElementById('scissorsButton');
  const result = document.getElementById('result');
  const finalResult = document.getElementById('finalResult');
  const restartButton = document.getElementById('restartButton');

  startButton.addEventListener('click', startGame);
  restartButton.addEventListener('click', restartGame);

  function startGame() {
    startButton.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    attachEventListeners();
  }

  function restartGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    result.innerHTML = '';
    finalResult.innerHTML = '';
    restartButton.classList.add('hidden');
    attachEventListeners();
  }

  function attachEventListeners() {
    rockButton.addEventListener('click', handleSelection);
    paperButton.addEventListener('click', handleSelection);
    scissorsButton.addEventListener('click', handleSelection);
  }

  function updateScore() {
    result.innerHTML = `Round ${round + 1}: ${playRound(playerSelection, computerSelection)}`;

    if (result.innerHTML.startsWith('You win!')) {
      playerScore++;
    } else if (result.innerHTML.startsWith('You lose!')) {
      computerScore++;
    }

    round++;

    if (round === 5) {
      if (playerScore > computerScore) {
        finalResult.innerHTML = 'You win the game!';
      } else if (playerScore < computerScore) {
        finalResult.innerHTML = 'You lose the game!';
      } else {
        finalResult.innerHTML = "It's a tie!";
      }

      restartButton.classList.remove('hidden');
      removeEventListeners();
    }
  }

  function handleSelection(e) {
    playerSelection = e.target.id.replace('Button', '');
    computerSelection = getComputerChoice();
    updateScore();
  }

  function removeEventListeners() {
    rockButton.removeEventListener('click', handleSelection);
    paperButton.removeEventListener('click', handleSelection);
    scissorsButton.removeEventListener('click', handleSelection);
  }

}

game();