# Loops : While and For  

Very often we need to perform a similar task a number of time. Then instead of doing that job again and again, we can use loops. For example : You have to print the data of an array(10 elements) one by one, then instead of using one method 10 times we can use loop.  

Loops are a way to repeat the same part of code multiple times.  

### The "while" loop  

Syntax : 
```js
while (condition) {
  // code
}
```  

While the condition is **true**, the code from the loop body will be executed.  

Example :  
```js
let i = 0;
while( i < 5 ){
    console.log(i); // 0 1 2 3 4
    i++;
}
```  

A single execution of the loop body is called an *iteration*. The loop in the example above makes five iterations.  

If there were no i++ in the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and for server-side JavaScript we can kill the process.  

Any expression or a variable can be a loop condition, not just a comparison. They are evaluated and converted to a boolean by while.  

For instance, the shorter way to write while (i != 0) could be while (i):  
```js
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( i );
  i--;
}
```  

If the loop body has a single statement, we can omit the brackets `{…}`:  

```js
let i = 3;
while (i) console.log(i--);
```  

### The "do..while" loop  

In many cases we want certain conditions to be executed atleat once (if it is false then also). In that case we use do..while loop.  

The condition check can be moved below the loop body using the *do..while* syntax:  
```js
do {
  // loop body
} while (condition);
```  

The loop will first execute the body, then check the condition and, while it's truthy, execute it again and again.  

### The "for" loop  

Mostly used loop.  

Syntax :  
```js
for (begin; condition; step) {
  // ... loop body ...
}
```  
For example :  
```js
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}
```  

Steps involved in above example :  
  * **begin** 	    i = 0 	        Executes once upon entering the loop.  
  * **condition** 	i < 3 	        Checked before every loop iteration, if fails the loop stops.
  * **step** 	    i++ 	        Executes after the body on each iteration, but before the condition check.  
  * **body** 	    console.log(i) 	Runs again and again while the condition is truthy  

**NOTE :** Some part of the for loop can be Omitted.  

Look at few examples :  

```js
// NO BEGIN
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  console.log( i ); // 0, 1, 2
}


//NO BEGIN AND STEP
let i = 0;

for (; i < 3;) {
  console.log( i++ );
}
```  

### Break    

Normally the loop exits when the condition becomes falsy.  

But we can force the exit at any moment. There's a special break directive for that.  

```js
let i = 0;
for(;i < 3; i++){
    if(i == 2){
        break;
    }
    console.log(i); // 0 1 as when i == 2 you will some out of the for loop. 
}
```  

### Continue  

The continue directive is a "lighter version" of break. It doesn't stop the whole loop. Instead it stops the current iteration and forces the loop to start a new one (if the condition allows).  

We can use it if we're done on the current iteration and would like to move on to the next.  

The loop below uses continue to output only odd values:  
```js
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  *!*if (i % 2 == 0) continue;*/!*

  console.log(i); // 1, then 3, 5, 7, 9
}
```