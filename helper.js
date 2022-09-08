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

const generatePhonetics = (password, specialChar) => {
  let milPhonetics = 'Capital ';
  for (const key in milAlph) {
    if (password[0] === key) {
      milPhonetics += `${milAlph[key]},`;
    }
  }
  for (let i = 1; i < password.length; i++) {
    for (let key in milAlph) {
      if (password[i].toUpperCase() === key) {
        milPhonetics += ` ${milAlph[key].toLowerCase()},`;
      }
    }
  }
  return `${milPhonetics} ${specialChar}`;
};
