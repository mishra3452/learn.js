### Solution of questions of 01example.js  


#### (1). console.log( null || 2 || undefined );  

The answer is 2, that's the first truthy value.  

#### (2). console.log( console.log(1) || 2 || console.log(3) );  

The answer is first *1*, then *2*.
The call to console.log() does not return a value. Or, in other words, it returns *undefined*.

  * The first OR || evaluates it's left operand console.log(1). That shows the first message with 1.
  * The console.log() returns undefined, so OR goes on to the second operand searching for a truthy value.
  * The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer console.log().  

There will be no 3, because the evaluation does not reach console.log(3).  

#### (3). console.log( 1 && null && 2 );  

The answer: null, because it's the first falsy value from the list.  

#### (4). console.log( console.log(1) && console.log(2) );  

The answer: *1*, and then *undefined*.  

The call to console.log() returns undefined (it just shows a message, so there's no meaningful return).  

Because of that, *&&* evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it's done.  

#### (5). console.log( null || 2 && 3 || 4 );  

The answer: 3.  

The precedence of *AND &&* is higher than ||, so it executes first.  

The result of *2 && 3 = 3*, so the expression becomes:

```js
null || 3 || 4
```  

Now the result is the first truthy value: 3.  

#### (6). if (-1 || 0) console.log( 'first' );  

The result of -1 || 0 = -1, truthy so output will be *first* .  

#### (7). if (-1 && 0) console.log( 'second' );  

-1 && 0 = 0, falsy so you will not go into the if(). Nothing will be printed.  

#### (8). if (null || -1 && 1) console.log( 'third' );  

Operator && has a higher precedence than ||  

so -1 && 1 executes first, giving us the chain:  
*null || -1 && 1  ->  null || 1  ->  1*
