/*
Try to find the output of the following.
Find the reasons in 01solution.md
*/
console.log( null || 2 || undefined );
console.log( console.log(1) || 2 || console.log(3) );

console.log( 1 && null && 2 );
console.log( console.log(1) && console.log(2) );

console.log( null || 2 && 3 || 4 );

if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' );

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