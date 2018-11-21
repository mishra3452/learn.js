/*
Try to find the output of the following.
Find the reasons in 01solution.md
*/
console.log( null || 2 || undefined );                  //(1)
console.log( console.log(1) || 2 || console.log(3) );   //(2)

console.log( 1 && null && 2 );                          //(3)
console.log( console.log(1) && console.log(2) );        //(4)

console.log( null || 2 && 3 || 4 );                     //(5)

if (-1 || 0) console.log( 'first' );                    //(6)
if (-1 && 0) console.log( 'second' );                   //(7)
if (null || -1 && 1) console.log( 'third' );            //(8)

/*
Output :

2
1
2
null
1
undefined
3
first
third

*/