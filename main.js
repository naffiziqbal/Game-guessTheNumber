let pcGuess = Math.floor(Math.random() * 10 +1) * 10; //Computer Guess


console.log(pcGuess);
const  lastResult = document.querySelector(".lastResult");
const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click", checkGuess);

function checkGuess(){
    let userGuess = Number(guessField.value);
    console.log(userGuess);

    if(guessCount == 1 ){
        guesses.textContent = 'Previous Guesses';

    }
    guesses.textContent += userGuess + ' ';

    if(userGuess == pcGuess){
        lastResult.textContent = "You Won";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = " ";
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = '!! Game Over!!';
        setGameOver();

    }else{
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = "red";
        if(userGuess < pcGuess){
            lowOrHi.textContent = "Too low"
        }else if(userGuess > pcGuess){
            lowOrHi.textContent = "Too  High"
        }
    }
    guessCount++;
    guessField.value = " ";
    guessField.focus()
}



function setGameOver(){
    guessField.disabled = 'true';
    guessSubmit.disabled = "true";
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}



function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'purpule';
    pcGuess = Math.floor(Math.random() * 100) + 1;

}  