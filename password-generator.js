var generatePassword = require("generate-password");
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 32,                 
  });

  console.log("Generated Password:", password);
}
generateRandomPassword();
