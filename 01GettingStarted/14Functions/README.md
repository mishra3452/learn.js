# FUnctions  

Quite often we need to perform a similar action in many places of the script.  

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.  

Functions are the main "building blocks" of the program. They allow the code to be called many times without repetition.  

We've already seen examples of built-in functions, like *alert(message)*, *console.log(message)*, *prompt(message, default)* and *confirm(question)*. But we can create functions of our own as well.  

### Function Declaration  

Syntax :  

```js
function showMessage() {
  console.log( 'Hello everyone!' );
}
```  

Here in the above example showMessage() is the **name of the function**, value in the " () " is the **argument of the function** and code in " {} " is the **body of the function**.