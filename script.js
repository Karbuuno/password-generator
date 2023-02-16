// Assignment Code
var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  Symbols: " ~`!-_+={}[]|;:<>,./?@#$%^&*()",
  numbers: "0123456789",
};

var generatePassword = function (characters) {
  var newPassword = "";
  var finalPassword = "";
  var length;
  let isTrue;
  do {
    length = window.prompt("Please Enter A Number between 8-128");

    isTrue = length && Number(length) && length >= 8 && length <= 128;
  } while (!isTrue);

  var lowerCase = window.confirm("would you like to include lowercase letters");

  if (lowerCase) {
    newPassword += characters["lowerCase"];
  } else {
    window.alert("lowerCase will not include in your password");
  }
  var upperCase = window.confirm("would you like to include upperCase letters");
  if (upperCase) {
    newPassword += characters["upperCase"];
  } else {
    window.alert("UpperCase will not include in your password");
  }
  var Symbols = window.confirm("would you like to include Symbols");
  if (Symbols) {
    newPassword += characters["Symbols"];
  } else {
    window.alert("Symbols will not include in your password");
  }
  var numbers = window.confirm("would you like to include numbers");
  if (numbers) {
    newPassword += characters["numbers"];
  } else {
    window.alert("Numbers will not include in your password");
  }

  if (!upperCase && !lowerCase && !numbers && !Symbols) {
    window.alert(
      "Please choose one of the following strings upperCase, lowerCase, numbers or Symbols "
    );
  } else {
    for (var i = 0; i < length; i++) {
      let currentRandom = Math.floor(Math.random() * newPassword.length);

      // selecting on of the sybmoles or number or letters
      finalPassword += newPassword[currentRandom];
    }
    alert("Your passwor has been secsefully generated");
  }

  return finalPassword;
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
