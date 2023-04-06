// Assignment code here
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
'W', 'X', 'Y', 'Z'];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = ['!', '@', '#', '@', '$', '%', '^', 
'&', '*'];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = prompt('How many characters in your password?')
  let lowerCase = prompt('Include lowercase?')
  let upperCase = prompt('Include uppercase?')
  let numbers = prompt('Include numbers?')
  let specialCharacters = prompt('Include special characters?')
  let chosen = []
  chosen = chosen.concat(lowerCaseArray, upperCaseArray, numbersArray, specialCharactersArray)
 var password = ''
  for (let i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()*chosen.length)
    var randomLowerCaseLetter = chosen[randomNumber]
    password = randomLowerCaseLetter + password
  }
// need to use the global variables to generate password
// randomize number to use as index and put it in a loop that stops at password length
  return password
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 