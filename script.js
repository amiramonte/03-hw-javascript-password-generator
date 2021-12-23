// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C"];
var numbers = ["1", "2", "3"];
var specialCharacters = ["!", "@", "#"];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pot = []  
  var length = parseInt(prompt("How long would like you password to be?"));
  if (length < 8 || length > 128) {
    return alert("invalid length");
  }
  var shouldContainLower = confirm("Would you like to include lower case letters?");
  var shouldContainUpper = confirm("Would you like to include upper case letters?");
  var shouldContainNumbers = confirm("Would you like to include numbers?");
  var shouldContainCharacters = confirm("Would you like to include special characters?");

  if (shouldContainLower === false &&
      shouldContainUpper === false &&
      shouldContainNumbers === false &&
      shouldContainCharacters === false) {
        return alert("You must select at least one character type.");
      }

if(shouldContainLower) {
  pot = pot.concat(lowerCaseLetters);
}
if (shouldContainUpper) {
  pot = pot.concat(upperCaseLetters);
}
if (shouldContainNumbers) {
  pot = pot.concat(numbers);
}
if (shouldContainCharacters) {
  pot = pot.concat(specialCharacters);
}

console.log(pot);

// loop through randomly length times and create copies from the pot and add to our final password










}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
