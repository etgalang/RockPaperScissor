// Function to get random computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to update score
function updateScore(outcome) {
    if (outcome === 'tie') {
        document.getElementById('ties').textContent++;
    } else if (outcome === 'player') {
        document.getElementById('wins').textContent++;
    } else {
        document.getElementById('losses').textContent++;
    }
}

// Function to play sound based on game outcome
function playSound(outcome) {
    let audioFile;
    if (outcome === 'player') {
        audioFile = 'Correct.mp3';
    } else if (outcome === 'computer') {
        audioFile = 'Boom.mp3';
    } else {
        audioFile = 'Okay.mp3';
    }
    
    // Create an audio element
    const audio = new Audio(audioFile);
    // Play the audio file
    audio.play();
}

// Function to reset score and outcome result
function resetScore() {
    document.getElementById('wins').textContent = '0';
    document.getElementById('losses').textContent = '0';
    document.getElementById('ties').textContent = '0';
    document.getElementById('result').textContent = ''; // Clear outcome result
}

// Main function to handle game logic
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const outcome = determineWinner(playerChoice, computerChoice);

    // Update computer choice display
    const computerChoiceImg = document.getElementById('computer-choice');
    computerChoiceImg.src = computerChoice + '.PNG';

    // Update outcome display and apply styles
    const resultElement = document.getElementById('result');
    const resultText = resultElement.querySelector('span');
    if (outcome === 'tie') {
        resultText.textContent = 'It\'s a tie I guess...';
        resultElement.style.color = 'white';
        resultText.style.backgroundColor = 'blue';
    } else if (outcome === 'player') {
        resultText.textContent = 'YOU WON!';
        resultElement.style.color = 'white';
        resultText.style.backgroundColor = 'green';
    } else {
        resultText.textContent = 'Nah, the computer won!';
        resultElement.style.color = 'white';
        resultText.style.backgroundColor = 'red';
    }

    // Update score
    updateScore(outcome);
    
    // Play sound based on outcome
    playSound(outcome);
}

// Event listeners for player choice
document.getElementById('rock').addEventListener('click', function() {
    play('rock');
});
document.getElementById('paper').addEventListener('click', function() {
    play('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
    play('scissors');
});

// Event listener for reset button
document.getElementById('reset-btn').addEventListener('click', function() {
    location.reload(); // Reload the page
});
