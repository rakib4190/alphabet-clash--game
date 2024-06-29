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
        hideElementById('play-ground');
        showElementById('display-score');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
   

}
