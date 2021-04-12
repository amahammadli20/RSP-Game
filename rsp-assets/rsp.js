
const game = () =>{
    let playerScore = 0;
    let compScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector(".middle-section button");
        const mainSection = document.querySelector(".middle-section");
        const match = document.querySelector(".match");

        /*The classList property returns the class name(s) of an element, as a DOMTokenList object.

        This property is useful to add, remove and toggle CSS classes on an element.

        The classList property is read-only, however, you can modify it by using the add() and remove() methods.
        */

        playBtn.addEventListener("click", () =>{
            mainSection.classList.add("fadeOut"); //maini yox edib
            match.classList.add("fadeIn"); //matchi var etdik
        });
    }

    //play match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const compHand = document.querySelector(".computer-hand");
        const hands = document .querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })
        //computer options
        const compOptions = ["Rock", "Scissors", "Paper"];
        
        options.forEach(option => {
            option.addEventListener("click", function(){

            //comp choices    
            const compNumber = Math.floor(Math.random() * 3);  
            const compChoice = compOptions[compNumber];

           setTimeout(() => {
            //here is where we call compare function 
            compareChoices(this.textContent, compChoice);

            //update imgs
            playerHand.src = `./img-assets/${this.textContent}.png`;
            compHand.src = `./img-assets/${compChoice}.png`; //compChoice is randomly chosen, so we don't need to write "this here"
           }, 2000);

            //animation runs here
            playerHand.style.animation = "shakePlayerHand 2s ease";
            compHand.style.animation = "shakeCompHand 2s ease";
            });
        });
    };

    const updateScore = () =>{
        const pScore = document.querySelector(".player-score p");
        const cScore = document.querySelector(".comp-score p");
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }

    const compareChoices = (playerChoice, compChoice) =>{
        //update text when the choice is made (depending on choice)
        const choiceRes = document.querySelector(".choiceResult");

        //check rock, scissors and paper condition
        if(playerChoice === "Rock" && compChoice === "Scissors"){
            choiceRes.textContent = "Player Wins!";
            playerScore++;
            updateScore();
            return;
        }else if(playerChoice === "Rock" && compChoice === "Paper"){
            choiceRes.textContent = "Computer Wins!";
            compScore++;
            updateScore();
            return;
        }else if(playerChoice === "Scissors" && compChoice === "Paper"){
            choiceRes.textContent = "Player Wins!";
            playerScore++;
            updateScore();
            return;
        }else if(playerChoice === "Scissors" && compChoice === "Rock"){
            choiceRes.textContent = "Computer Wins!";
            compScore++;
            updateScore();
            return;
        }else if(playerChoice === "Paper" && compChoice === "Rock"){
            choiceRes.textContent = "Player Wins!";
            playerScore++;
            updateScore();
            return;
        }else if(playerChoice === "Paper" && compChoice === "Scissors"){
            choiceRes.textContent = "Computer Wins!";
            compScore++;
            updateScore();
            return;
        } else if(playerChoice === compChoice){
            choiceRes.textContent = "It's a tie";
            return; 
            //if we came here, there is no need to continue others anymore, that's why we make return
        }
    }

    //call inner functions
    startGame();
    playMatch();
}

game();

/* forEach() method calls a function once for each element in an array, in order.

Note: the function is not executed for array elements without values.
*/