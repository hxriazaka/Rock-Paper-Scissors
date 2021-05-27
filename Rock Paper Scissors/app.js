const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const PHands = document.querySelector('.player-hand');
        const CHands = document.querySelector('.computer-hand');
        const Hands = document.querySelectorAll('.hands img');

        Hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const CNumber = Math.floor(Math.random() * 3);
                const CChoise = computerOptions[CNumber];



                setTimeout(() =>{
                    compareHands(this.textContent, CChoise);
                    PHands.src = `./Hands/${this.textContent}.png`;
                    CHands.src = `./Hands/${CChoise}.png`;
                }, 2000);



                PHands.style.animation = 'shakePlayer 2s ease';
                CHands.style.animation = 'shakeComputer 2s ease';

           
            });
        });

        

    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (PChoice, CChoise) =>{

        const winner = document.querySelector('.winner h4');
        if(PChoice == CChoise){
            winner.textContent = '';
            return;
        };
        if(PChoice ==='rock'){
            if(CChoise === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            };
        };
        if(PChoice === 'paper'){
            if(CChoise === 'scissors'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            };
        };
        if(PChoice === 'scissors'){
            if(CChoise === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            };
        };
       
    };



    startGame();
    playMatch();
    compareHands();
};



game();