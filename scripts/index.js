function handleKeyboardKeyPress(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
   if(currentAlphabet === playerPressed){
    // get the current score 
    const currentScore = getTextElementValueById('current-score');
        //increse the score by 1
    const updateScore = currentScore + 1;
        // set or show the update score
    setTextElementValueById('current-score', updateScore);
     // remove alphabet key  background color
     removeBackgroundColorById(currentAlphabet);
     continueGame();

   }
   else{
    const currentLife = getTextElementValueById('current-life')
    const reaminingLife = currentLife - 1;
    setTextElementValueById('current-life', reaminingLife);
    if(reaminingLife === 0){
        gameOver();

    }
    
   }
   
}
document.addEventListener('keyup', handleKeyboardKeyPress);

function continueGame(){
    //generate a random alphabet
   const alphabet = getRaandomAlphabet();
   //set randomlly alphabet to the screen
   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet; 
   // set alphabet key  background color
   setBackgroundColorById(alphabet);

}
function play(){
    //hide home screen and display score section and show only play ground
    hideElementById('home-screen');
    hideElementById('display-score');
    showElementById('play-ground');
    //reset life and score value
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
   
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('display-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score', lastScore);
    // remove current alphbet background color
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet);
}
