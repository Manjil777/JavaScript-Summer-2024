try {
  console.log("first i will run.");
  age;
} catch (error) {
  console.log("no if error i will run first.");
  console.log(error.message);
}

/* 
first try block will run.
if any error occur in try block.
control jumps to the catch block.
*/
