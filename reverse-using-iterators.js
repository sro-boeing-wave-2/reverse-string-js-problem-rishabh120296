// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (inputString) => {
  const { length } = inputString;
  let reverseString = '';
  for (let i = 0; i < length; i += 1) {
    reverseString += inputString.charAt(length - i - 1);
  }
  return reverseString;
};

module.exports = reverse;
