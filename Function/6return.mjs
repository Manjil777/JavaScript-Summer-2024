// if return is not placein the fnciton by default the value will be undefined

/* 
make a arrow where if age is > 17 print { he can enter a bar}
else: print { he can't enter a bar}
*/

const isBarOpen = (age) => {
  if (age > 17) {
    return "He can enter a bar.";
  } else {
    return "He can't enter a bar.";
  }
};

let _isBarOpen = isBarOpen(18);
console.log(_isBarOpen);

const doYouLoveMe = (answer) => {
  if (answer === "yes") {
    return "I love you too.";
  } else {
    return "Buzz off B*tch!";
  }
};

let _doYOuLoveME = doYouLoveMe("yes");
console.log(_doYOuLoveME);
