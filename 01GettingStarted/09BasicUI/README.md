# alert, prompt, confirm  

### alert  

We have used alert previously  
Syntax :  
```js
alert("HELLO");
```  

This shows a message "HELLO" and pauses the script execution until the user presses "OK".  

The mini-window with the message is called a modal window. The word "modal" means that the visitor can't interact with the rest of the page, press other buttons etc, until they have dealt with the window. In this case -- until they press "OK".  

### prompt  

Function prompt accepts two arguments:

```js
result = prompt(title[, default]);
```  

It shows a modal window with a text message, an input field for the visitor and buttons OK/CANCEL.

title : The text to show to the visitor.

default : An optional second parameter, the initial value for the input field.  

For example :  

```js
let age = prompt('How old are you?', 100);//here default value of age is 100, if nothing entered then 100 will be taken
alert(`You are ${age} years old!`); // You are 100 years old!
```  

### comfirm  

Syntax :  
```js
result = confirm(question);
```  

Function `confirm` shows a modal window with a `question` and two buttons: OK and CANCEL.

The result is `true` if OK is pressed and `false` otherwise.

For example:

```js run
let isLearningJs = confirm("Are you Learning Js?");

alert( isLearningJs ); // true if OK is pressed
```  
