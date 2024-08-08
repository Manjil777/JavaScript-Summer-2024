const fun1 = (message) => {
  let ee = new Error(message);
  throw ee;
};

fun1("Happy birthday bot!!");
