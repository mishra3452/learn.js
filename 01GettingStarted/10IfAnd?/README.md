# Conditional operators: if, '?'  

Sometimes we need to perform different actions based on a condition.

There is the if statement for that and also the conditional (ternary) operator for conditional evaluation which we will be referring as the “question mark” operator ? for simplicity.  

### The "if" statement  

The if statement gets a condition, evaluates it and, if the result is true, executes the code.

For example:  

```js
let year = prompt('Are you learning Js?', '');

*!*
if (year == "yes") alert( 'Good! Many more tutorials are coming.' );
*/!
```  

### The "else" clause  

If the condition in the if clause is false then this part will be executed.  

```js
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
```  

We can use several if conditions at a time. using **else if**  

```js
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```  

### Ternary operator '?'  

The so-called "ternary" or "question mark" operator lets us do the if part in shorter and simpler way.

The operator is represented by a question mark ?. The formal term "ternary" means that the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:

```js
let result = condition ? value1 : value2
```  

The condition is evaluated, if it's truthy then value1 is returned, otherwise -- value2.

For example:

```js
let accessAllowed = (age > 18) ? true : false;
```  

Technically, we can omit parentheses around age > 18. The question mark operator has a low precedence. It executes after the comparison >, so that'll do the same:

```js
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
```  

But parentheses make the code more readable, so it's recommended to use them.