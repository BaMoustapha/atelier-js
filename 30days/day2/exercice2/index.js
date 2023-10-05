console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
 
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)

let str = '10';
let num = 10;

if (typeof str === 'number') {
    console.log('The typeof is exactly equal to 10.');
  } else {
    
    var convertedNum = parseInt(str, 10); 
    if (convertedNum === num) {
      console.log('The converted value is exactly equal to 10.');
    } else {
      console.log('The converted value is NOT exactly equal to 10.');
    }
  }

if (parseFloat(9.8) === 10) {
    console.log('equal to 10')
} else {
    parseFloat(9.8) = 10;
    console.log('equal to 10')
}

console.log(parseFloat(9.8));