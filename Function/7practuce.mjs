/* 
iseven
pass number

if the given number is even  return true or return fales
*/

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

let _isEven = isEven(30);
console.log(_isEven);
