// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChar = document.querySelector("#criteria1");
var upperChar = document.querySelector("#criteria2");
var numeric = document.querySelector("#criteria3");
var spChar = document.querySelector("#criteria4");
var pLength = document.querySelector("#password-length");

var final = "";
var passArr = [];

const numbers = ["0123456789"];
const lowerAlpha = ["abcdefghijklmnopqrstuvwxyz"];
const upperAlpha = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const specialChars = ["@%+/'!#$^?:.(){}[]~`-_,"];


//create functions that return values
function generateRandomCharacter() {
  var alphabet = [];
  if (spChar.checked){
    alphabet = alphabet + specialChars;
  }
  if (numeric.checked){
    alphabet = alphabet + numbers;
  }
  if (upperChar.checked){
    alphabet = alphabet + upperAlpha;
  }
  if (lowerChar.checked){
    alphabet = alphabet + lowerAlpha;
  }

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

//create a password that fulfils common password criteria
function generatePassword() {
  //clear the array before repeating
  passArr = [];
  final = "";
  for(var i = 0; i < pLength.value; i++){
     passArr[i] = generateRandomCharacter();
     console.log(passArr[i]);
     final = final + passArr[i];
   }
}

// Write password to the #password input
function writePassword() {
 if (pLength.value < 8 || pLength.value > 128){
   alert("enter a valid password length");
   return;
 }
 if (!lowerChar.checked && !upperChar.checked && !spChar.checked && !numeric.checked){
   alert("None of the criteria was checked... Please select your desired criteria");
   return;
 }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //replaced password w/ final
  passwordText.value = final;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
