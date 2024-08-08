/* 
Use map if :
input and output ARE ARRAY
input lenghth is equal to output lenght.
*/

let a = "manjil";
let c = a.split("");

let b = c.map((value, i) => {
  if (i === 0) {
    return value.toUpperCase();
  }
  return value.toLowerCase();
});
console.log(b.join(""));
