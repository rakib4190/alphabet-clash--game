function handleKeyboardKeyPress(event){
    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
   if(currentAlphabet === playerPressed){
     // remove alphabet key  background color
     removeBackgroundColorById(currentAlphabet);
    continueGame();
   
   }
   else{
    console.log('your life is drcresed');
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
