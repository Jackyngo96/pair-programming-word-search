const transpose = require("/home/labber/lighthouse/async/matrix_transposition.js");

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((h) => h.join(""));
  const verticalJoin = transpose(letters).map((v) => v.join(""));
 
  for (let horizontal of horizontalJoin) {
    if (horizontal.includes(word)) {
      return true;
    } else {
      for (let vertical of verticalJoin) {
        if (vertical.includes(word)) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = wordSearch;

console.log(wordSearch([], 'SEINFELD'))

let hello = []
console.log(hello.length)