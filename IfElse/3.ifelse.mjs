/* 
age 0 to 18 => Underage if (age>=0 && age<=18)
age 19 to 60 => Adult if (age>=19 && age<=60)
age 61 to 150 => Old if (age>=61 && age<=150)
else immortal

*/

let age = 2;

if (age >= 0 && age <= 18) {
  console.log("UnderAge is  Detected!!");
} else if (age >= 19 && age <= 60) {
  console.log("Adult is Detected!!");
} else if (age >= 61 && age <= 150) {
  console.log("Old Age is Detected!!");
} else {
  console.log("Immortal is Detected!!");
}
