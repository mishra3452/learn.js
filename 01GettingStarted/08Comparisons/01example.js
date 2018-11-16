/* 
Try to find the output of the following :
*/
console.log(5 > 4)                  //1
console.log("apple" > "pineapple")  //2
console.log("2" > "12")             //3
console.log(undefined == null)      //4
console.log(undefined === null)     //5
console.log(null == "\n0\n")        //6
console.log(null === +"\n0\n")      //7

/*
Output :

true
false
true (dictionary comparison, first char of "2" is greater than the first char of "1")
true
false
false
false
*/