const generateRandomLetter = () => {
  return Math.floor(Math.random() * 26);
};
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const generatePassword = (passwordLength, specialChar) => {
  let password = '';
  password += upperCase[generateRandomLetter()];
  for (let i = 0; i < passwordLength - 5; i++) {
    password += lowerCase[generateRandomLetter()];
  }
  for (let i = 0; i < 3; i++) {
    password += numbers[generateRandomNumber()];
  }
  password += specialChar;

  return password;
};

const generatePhonetics = (password) => {
  let milPhonetics = '';
  for (const key in milAlph) {
    // console.log(`${key}: ${milAlph[key]}`);
    if (password[0] === key) {
      milPhonetics += `Capital ${milAlph[key]}`;
    }
  }

  for (let char of password) {
    if (!char === char.toUpperCase()) {
      for (const key in milAlph) {
        if (char === key) {
          milPhonetics += milAlph[key];
        }
      }
    }
  }
  return milPhonetics;
};
