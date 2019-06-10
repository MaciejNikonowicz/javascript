const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        // Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    // update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                // Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    // update score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    // compare the values (choices)
    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            updateScore();
            return;
        }
        switch(playerChoice){
            case 'rock':
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Player Wins!';
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Computer Wins!';
                    cScore++;
                    updateScore();
                    return;
                }
                break;
            case 'paper':
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Computer Wins!';
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Player Wins!';
                    pScore++;
                    updateScore();
                    return;
                }
                break;
            case 'scissors':
                if(computerChoice === 'rock'){
                    winner.textContent = 'Computer Wins!';
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Player Wins!';
                    pScore++;
                    updateScore();
                    return;
                }
                break;
        }
    };

    // call all the inner functions
    startGame();
    playMatch();
};

// start the game function
game();