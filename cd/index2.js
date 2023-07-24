function sortNumbers(tInit, tInf, tSup) {
    for (let i = 0; i < tInit.length; i++) {
      if (tInit[i] < 10) {
        tInf.push(tInit[i]);
      } else {
        tSup.push(tInit[i]);
      }
    }
  }

const tInit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const tInf = [];
const tSup = [];

sortNumbers(tInit, tInf, tSup);

console.log(tInf); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(tSup);