# Logical Operators  

There are three logical operators in JavaScript: **|| (OR)**, **&& (AND)**, **! (NOT)**.

Although they are called "*logical*", they can be applied to values of any type, not only boolean. The result can also be of any type.  

### || (OR)  

Syntax :  
```js
result = a || b;
```  

In classical programming, logical OR is meant to manipulate boolean values only. If any of its arguments are true, then it returns true, otherwise it returns false.  

In JavaScript the operator is a little bit more tricky and powerful. But first let's see what happens with boolean values.

There are four possible logical combinations:

```js
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```  

If an operand is not boolean, then it's converted to boolean for the evaluation.

For instance, a number 1 is treated as true, a number 0 as false:  

```js
if (1 || 0) { // works just like if( true || false )
  alert( 'Hello!' );
}
```
Given multiple OR'ed values:  

```js
result = value1 || value2 || value3;
```

The OR || operator does the following:  

  * Evaluate operands from left to right.  
  * For each operand, convert it to boolean. If the result is true, then stop and return the original value of that operand.  
  * If all other operands have been assessed (i.e. all were false), return the last operand.  

A value is returned in its original form, without the conversion.  

In other words, a chain of OR "||" returns the first truthy value or the last one if no such value is found.  

```js
alert( 1 || 0 ); // 1 (1 is truthy)
alert( true || 'no matter what' ); // (true is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```  

So, the above feature can be used for many purpose such as :  
  * **Getting the first truthy value from the list of variables or expressions.**

  Imagine we have several variables, which can either contain the data or be null/undefined. And we need to choose the first one with data.  
  
  We can use OR || for that.  

  * **Short-circuit evaluation.**  

  Operands can be not only values, but arbitrary expressions. OR evaluates and tests them from left to right. The evaluation stops when a truthy value is reached, and the value is returned. The process is called "a short-circuit evaluation", because it goes as short as possible from left to right.  

  ```js
  let x;
  *!*true*/!* || (x = 1);
  alert(x); // undefined, because (x = 1) not evaluated
  ```  

### && (AND)  

The AND operator is represented with two ampersands &&:  

```js
result = a && b;
```  

In classical programming AND returns true if both operands are truthy and false otherwise:  

```js
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```  

Just as for OR, any value is allowed as an operand of AND:  

```js
if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}
```  

The AND && operator does the following:  

  * Evaluate operands from left to right.  
  * For each operand, convert it to a boolean. If the result is false, stop and return the original value of that operand.  
  * If all other operands have been assessed (i.e. all were truthy), return the last operand.  

In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.
