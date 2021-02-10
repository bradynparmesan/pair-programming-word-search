// Word Search Pair Programming - Jasmeet & Saïd - wordSearch.js

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalArray = transpose(letters);
  const verticalJoin = verticalArray.map((element) => element.join(""));
  for (e of verticalJoin) {
    if (e.includes(word)) return true;
  }
  const backWordHorizontalJoin = letters.map((ls) => ls.reverse().join(""));
  for (const l of backWordHorizontalJoin) {
    if (l.includes(word)) return true;
  }
  const backWordVerticalJoin = verticalArray.map((ls) => ls.reverse().join(""));
  for (const l of backWordVerticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

// -------------STRETCH---------------------- //

// const diagonal = function (matrix, str) {
//   // str = WIFE
//   for (let y = 0; y < matrix.length; y++) {
//     for (let x = 0; x < matrix[y]; x++) {
//       if (matrix[y][x] === str[0]) {
//         for (let i = 1; i < str.length; i++) {
//           if (matrix[y + i][x + i] !== str[i]) {
//             break;
//           }
//         }
//       }
//     }
//   }
// };

module.exports = wordSearch;

const transpose = function (matrix) {
  // Create an empty array called transposedMatrix
  const transposedMatrix = [];
  // Iterate through the y axis of the input Matrix
  matrix.forEach((elementY, indexY) => {
    // Iterate through the x axis of the input Matrix
    elementY.forEach((elementX, indexX) => {
      // If first iteration
      if (indexY === 0) {
        // Create subarray
        transposedMatrix.push([]);
      }
      // Push to subarray
      transposedMatrix[indexX].push(elementX);
    });
  });
  // Return the transposedMatrix
  return transposedMatrix;
};
