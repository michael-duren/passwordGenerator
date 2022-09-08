let specialChar = '!';

const curChar = document.querySelector('#currentChar');

const btnEx = document.querySelector('#spEx');
btnEx.addEventListener('click', () => {
  specialChar = '!';
  curChar.innerText = specialChar;
});
const btnAt = document.querySelector('#spAt');
btnAt.addEventListener('click', () => {
  specialChar = '@';
  curChar.innerText = specialChar;
});
const btnPo = document.querySelector('#spPo');
btnPo.addEventListener('click', () => {
  specialChar = '#';
  curChar.innerText = specialChar;
});
const btnDo = document.querySelector('#spDo');
btnDo.addEventListener('click', () => {
  specialChar = '$';
  curChar.innerText = specialChar;
});
const btnPe = document.querySelector('#spPe');
btnPe.addEventListener('click', () => {
  specialChar = '%';
  curChar.innerText = specialChar;
});
const btnAm = document.querySelector('#spAm');
btnAm.addEventListener('click', () => {
  specialChar = '&';
  curChar.innerText = specialChar;
});

// Get password length
const getLength = document.querySelector('#passwordLength');
//Display special charcter

// Generate button
const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', () => {
  const passwordLength = getLength.value;
  var randomPassword = generatePassword(passwordLength, specialChar);
  const phonetics = generatePhonetics(randomPassword, specialChar);
  const passwordOutput = document.querySelector('#passwordOutput');
  passwordOutput.innerText = randomPassword;
  const phoneticsOutput = document.querySelector('#passwordSpelling');
  phoneticsOutput.innerText = phonetics;
});

// Copy paste button
const copyClipboardButton = document.querySelector('#copyClipboard');
copyClipboardButton.addEventListener('click', async () => {
  const password = document.querySelector('#passwordOutput');
  const copyText = password.innerText;

  await navigator.clipboard.writeText(copyText);
  alert(`Copied ${copyText}`);
});
