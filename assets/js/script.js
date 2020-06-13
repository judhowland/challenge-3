// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArray = uppercase.split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = lowercase.split("");
var numeric = "1234567890";
var numericArray = numeric.split("");
var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialCharsArray = specialChars.split("");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to get criteria
var selectCriteria = function () {
  var passLength = prompt("How long would you like your password to be? Must be between 8 and 128 characters");
  if (passLength < 8) {
    alert("Please choose a valid length.");
    return;
  }
  if (passLength > 128) {
    alert("Please choose a valid length.");
    return;
  }

  var passUppercase = prompt("Would you like your password to include uppercase letters?");
  if (passUppercase === true) {
    alert("Password will include uppercase letters");
  }

  var passLowercase = prompt("Would you like your password to include lowercase letters?");
  if (passLowercase === true) {
    alert("Password will include lowercase letters");
  }

  var passNumeric = prompt("Would you like your password to include numbers?");
  if (passNumeric === true) {
    alert("Password will include numbers");
  }

  var passSpecialChars = prompt("Would you like your password to include special characters?");
  if (passSpecialChars === true) {
    alert("Password will include special characters");
  }

  if (passLength === false && passUppercase === false && passLowercase === false && passNumeric === false && passSpecialChars === false) {
    alert("You need to pick at least one criteria");
    return;
  } 

    var criteria = {
      length: passLength,
      uppercase: passUppercase,
      lowercase: passLowercase,
      numeric: passNumeric,
      specialChars: passSpecialChars
    };
    return criteria;
};

function generateRandom(arr) {
  var randomIndex = Math.floor(Math.random * arr.length);
  var randomChar = arr[randomIndex];
  return randomChar;
};

function generatePassword() {
  var criteria = selectCriteria();
  var result = [];
  var possibleChars = [];
  var guaranteedChars = [];
  console.log(criteria);
  console.log(result);
  console.log(possibleChars);

  if (criteria.specialChars) {
    possibleChars = possibleChars.concat(specialCharsArray);
    guaranteedChars.push(generateRandom(specialCharsArray));
  }

  if (criteria.uppercase) {
    possibleChars = possibleChars.concat(uppercaseArray);
    guaranteedChars.push(generateRandom(uppercaseArray));
  }

  if (criteria.lowercase) {
    possibleChars = possibleChars.concat(lowercaseArray);
    guaranteedChars.push(generateRandom(lowercaseArray));
  }

  if (criteria.numeric) {
    possibleChars = possibleChars.concat(numericArray);
    guaranteedChars.push(generateRandom(numericArray));
  }

  for (var i = 0; i < criteria.length; i++) {
    var possibleCharacters = generateRandom(possibleChars);
    result.push(possibleCharacters);
  }

  // mixing at least one guaranteed character
  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }
  return result.join("");
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
