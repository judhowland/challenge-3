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
  if (passLength < 8 || passLength > 128)  {
    alert("Please choose a valid length.");
    return;
  };

  var passUppercase = confirm("Would you like your password to include uppercase letters?");
  if (passUppercase === true) {
    alert("Password will include uppercase letters");
  }

  var passLowercase = confirm("Would you like your password to include lowercase letters?");
  if (passLowercase === true) {
    alert("Password will include lowercase letters");
  }

  var passNumeric = confirm("Would you like your password to include numbers?");
  if (passNumeric === true) {
    alert("Password will include numbers");
  }

  var passSpecialChars = confirm("Would you like your password to include special characters?");
  if (passSpecialChars === true) {
    alert("Password will include special characters");
  }

  if (passUppercase === false && passLowercase === false && passNumeric === false && passSpecialChars === false) {
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

  if (!criteria) {
    return;
  }

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

  console.log(possibleChars);

  for (var i = 0; i < criteria.length; i++) {
    debugger;
    var possibleCharsArray = possibleChars.split("");
    console.log(possibleCharsArray);
    var possibleCharacters = generateRandom(possibleCharsArray);
    result.push(possibleCharacters);
    console.log(possibleCharacters);
  }

  // mixing at least one guaranteed character
  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
    console.log(result[i]);
  }

  return result.join("");
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (!password) {
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
