function continueGame(){
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
