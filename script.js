// Assignment code
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specials = ['!','@','#','$','^','&','*','(',')','{','}','[',']','|',';',':',',','<','.','>','/','?'];
var allKeys = [];

var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var askUser = window.prompt("How many charaters do you want for your password? (it has to be between 8-128 character.)");
  if (askUser < 8 || askUser > 128) {
    return "please choose a number between 8 and 128.";
  }
  else {
    window.alert("Your password will be " + askUser + " characters long.");
  }

  hasLowerCase = confirm("Do you want lowercase characters in your password?");
  if (hasLowerCase) {
    alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  hasUpperCase = confirm("Do you want uppercase characters in your password?");
  if (hasUpperCase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase charcters.")
  }

  hasNumbers = confirm("Do you want numbers characters in your password?");
  if (hasNumbers) {
    alert("Your password will have numbers characters.");
  }
  else {
    alert("Your password will NOT have numbers charcters.")
  }

  hasSpecials = confirm("Do you want special characters in your password?");
  if (hasSpecials) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special charcters.")
  }

  if (hasLowerCase === false && hasUpperCase === false && hasNumbers === false && hasSpecials === false) {
    return"Please select at least one character type.";
  };

  if (hasLowerCase) {
    allKeys = allKeys.concat(lowerCase);
  }

  if (hasUpperCase) {
    allKeys = allKeys.concat(upperCase);
  }

  if (hasNumbers) {
    allKeys = allKeys.concat(numbers);
  }

  if (hasSpecials) {
    allKeys = allKeys.concat(specials);
  }

  let usersNewPassword = ""
  for (let i = 0; i < askUser; i++) {
    let rng =[Math.floor(Math.random() * allKeys.length)];
    usersNewPassword = usersNewPassword + allKeys[rng];
  }

  return usersNewPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
