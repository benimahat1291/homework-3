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
const symbolcharcodes = charArray(33, 43);

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
  let charCodes = lowercharcodes;
  //If upper is true then add array to lowercharcodes array
  if (upper) charCodes = charCodes.concat(uppercharcodes);
  if (number) charCodes = charCodes.concat(numbercharcodes);
  if (symbol) charCodes = charCodes.concat(symbolcharcodes);

  //using our combined array with all our char codes uses a randomiizer to select and convert code to char
  const passwordChars = [];
  for (let i = 0; i < length; i++){ // index starting at zero, loop untill max characters met
      const arraynumber = charCodes[Math.floor(Math.random()* charCodes.length)]; // assigns random num from array
      passwordChars.push(String.fromCharCode(arraynumber)); //calling on Charcodesheet given num values from array

  };
  const password = passwordChars.join(''); //turns list of strings into a single string
  return password;


};
//this creates an array of number between the given values
function charArray(min,max){
  const array = [];
  for (let i = min; i<= max; i++) { // fill array with the given range
      array.push(i);
  };
  return array;
};

