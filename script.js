// Assignment code here
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specials = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var askUser = window.prompt("How many charaters do you want for your password? (it has to be between 8-128 character.)");
  if (askUser < 8 || askUser > 128) {
    return "please choose a number between 8 and 128.";
  }
  else {
    window.alert("Your password will be " + askUser + " characters long.");
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
