/*
Try to find the output of below program on your own and then match the answers.
*/

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log("  -9\n" + 5);
console.log("  -9\n" - 5);
console.log(null + 1);
console.log(undefined + 1);

/*
Output :

10 //The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
-1 //The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
1 //1+0=1
2 //3 converted to number
6 //both strings are converted to number
9px // firstly sum is there and then + behaves as join
$45 // firstly string is there so + behaves as join
2 // converted to number
NaN //no explanation
Infinity //infinity
  -9 // + as join 
5
-14 //converted to numbers
1 //null becomes 0 after the numeric conversion.
NaN //undefined becomes NaN after the numeric conversion.
*/