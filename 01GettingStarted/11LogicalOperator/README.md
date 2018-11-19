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