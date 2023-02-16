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
  var length = window.prompt(
    "Ente between 8 -128 of characters you would like your password to be"
  );
  if (length && Number && length > 8 && length < 128) {
    var lowerCase = window.confirm(
      "would you like to include lowercase letters"
    );

    if (lowerCase) {
      newPassword += characters["lowerCase"];
    } else {
      window.alert("lowerCase will not include in your password");
    }
    var upperCase = window.confirm(
      "would you like to include upperCase letters"
    );
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
        finalPassword +=
          newPassword[Math.floor(Math.random() * newPassword.length)];
      }
      alert("Your passwor has been secsefully generated");
    }
  } else {
    window.alert("Pleace enter a numebr between 8 and 128");
    return "Pleace try again";
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
