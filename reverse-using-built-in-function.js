// The intent of this file is to reverse
// the string using built in functions.
const reverse = (inputString) => {
  const splitString = inputString.split('');
  const reverseArray = splitString.reverse();
  const reverseString = reverseArray.join('');
  return reverseString;
};
module.exports = reverse;
