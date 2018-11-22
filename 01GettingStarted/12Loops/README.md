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