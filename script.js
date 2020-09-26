// Assignment Code, refrence HTML IDS
var generateBtn = document.getElementById('generate');
var numOfCharBtn = document.getElementById('numOfCharsBox');
var upperboxcheck = document.getElementById('upperBoxId');
var numberboxcheck = document.getElementById('numbersBoxId');
var symbolboxcheck = document.getElementById('symbolBoxId');
var passworddisplay = document.getElementById('password');


// Define Arrays used for Symbol from char codes
const uppercharcodes= charArray(65,90);
const lowercharcodes= charArray(97,122);
const numbercharcodes = charArray(48, 57);
const symbolcharcodes = charArray(33, 38);

// when the button is clicked store the values to the variable
generateBtn.addEventListener('click',() =>{
  var length = numOfCharBtn.value;
  var upper = upperboxcheck.checked;
  var number = numberboxcheck.checked;
  var symbol = symbolboxcheck.checked;
  //update markup to show password
  passworddisplay.innerText = generatePassword(length,upper,number,symbol);
});

function generatePassword(length,upper,number,symbol){
  //Set array is where we will store the chars generated using charcodes
  const passwordChars = [];
  let start = 0
  //If this value true value is push though the function then doo the following
  if (upper) {
    const arraynumber = uppercharcodes[Math.floor(Math.random()* uppercharcodes.length)]; // assigns random num from array 
      passwordChars.push(String.fromCharCode(arraynumber)); //using random array number push value to passwordChars array
      start++;// add start by 1
  };
  if (number) {
    const arraynumber = numbercharcodes[Math.floor(Math.random()* numbercharcodes.length)]; // assigns random num from array 
      passwordChars.push(String.fromCharCode(arraynumber)); //using random array number push value to passwordChars array
      start++;
  } ;
  if (symbol) {
    const arraynumber = symbolcharcodes[Math.floor(Math.random()* symbolcharcodes.length)]; // assigns random num from array 
      passwordChars.push(String.fromCharCode(arraynumber)); //using random array number push value to passwordChars array
      start++;
  } ;
// leave the rest of the arrays to be lower case // caould create code to to count for everything by joining all my lists 
  for ( let i = start; i < length; i++){ // index starting at zero, loop untill max characters met
      const arraynumber = lowercharcodes[Math.floor(Math.random()* lowercharcodes.length)]; // assigns random num from array 
      passwordChars.push(String.fromCharCode(arraynumber)); //calling on Charcodesheet given num values from array

  };
  const password = passwordChars.join(''); //turns list of strings into a single string
  return password;


};
//this creates an array of number between the given values to create charcode variables
function charArray(min,max){
  const array = [];
  for (let i = min; i<= max; i++) { // fill array with the given range
      array.push(i);
  };
  return array;
};

