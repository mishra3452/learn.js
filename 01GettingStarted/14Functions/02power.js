/*
Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times and returns the result.
Below is an js for pow(), use the following in your html
*/
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported,
      use an integer greater than 0`);
  } else {
    alert( pow(x, n) );
  }