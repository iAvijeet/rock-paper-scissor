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
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter rock, paper, or scissors:');
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(result);
  
      if (result.startsWith('You win!')) {
        playerScore++;
      } else if (result.startsWith('You lose!')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game!');
    } else {
      console.log("It's a tie!");
    }
  }
  
  game();
  