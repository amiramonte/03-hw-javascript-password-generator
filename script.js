// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];




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





// loop through randomly length times and create copies from the pot and add to our final password
  //for loop run as many times as user input for password length
  //generate a random index insdie the for loop
  //use random index to select a character from pot array
  //push copies of random characters to new array
  //
  //convert characters from new array to string without commas - use an array join - arraynamewhereyouhaveputthecopiedrandomcharacters.join("")
  //return passwordstring from above
  //




}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);