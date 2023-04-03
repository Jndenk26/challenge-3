// Assignment code here
var lowerCaseArray = ['a', 'b', 'c']
var upperCaseArray = ['A', 'B', 'C']
var numbersArray = [1, 2, 3, ]
var specialCharactersArray = ['!', '@', '#']

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = prompt('How many characters in your password?')
  let lowerCase = prompt('Include lowercase?')
  let upperCase = prompt('Include uppercase?')
  let numbers = prompt('Include numbers?')
  let specialCharacters = prompt('Include special characters?')
  // let chosen = []
  // chosen = chosen.concat(lowerCase, upperCase, numbers, specialCharacters)
 var password = ''
  for (let i=0; i<passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()*lowerCaseArray.length)
    var randomLowerCaseLetter = lowerCaseArray[randomNumber]
    password = randomLowerCaseLetter + password
  }
// need to use the global variables to generate password
// randomize number to use as index and put it in a loop that stops at password length
  return "generated password will go here"  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 