/* 
make a arrow function
name isEven 
it has one paramater called age
the function must print "age  is even" else print " age is odd"

*/

// if you want to make a function try to use const rather than let as we rarelly change the function

const isEven = (age) => {
  if (age % 2 === 0) {
    console.log("Age is Even.");
  } else {
    console.log("Age is Odd.");
  }
};

isEven(7);

/* 
To calculate the average of the three number

*/
const Average = (a, b, c) => {
  const sum = a + b + c;
  console.log(sum / 3);
};
Average(1, 2, 3);
