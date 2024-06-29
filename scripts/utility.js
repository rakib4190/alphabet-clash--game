
function hideElementById(elementId){
    const hideElement  = document.getElementById(elementId);
    hideElement.classList.add('hidden');
}
function showElementById(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}
//  generate random alphabet 
function getRaandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;

}
// set alphabet key background color
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// set alphabet key background color
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// get text element value 
function getTextElementValueById(elementId){ 
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

// set or display the element value
function setTextElementValueById(elementId, value){
    const element =document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const elementText = document.getElementById(elementId)
    const elementValue = elementText.innerText;
    return elementValue;

}
