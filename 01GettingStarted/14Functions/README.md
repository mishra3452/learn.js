# Functions  

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

### Function Naming  

  * A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.  
  * A function is an action, so function names are usually verbal.  
  * There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.  


### Local variables  

The variables declared inside a function are called *local variables*. They can only be used inside the function.  

For example :  

```js
function showMessage(){
  let name = "Sumit"; //local variable
  console.log('Hello ' + name);
}
console.log('Hello ' + name); //error as local variable name can only be accessed inside a block.
```  

### Outer or Global Variables  

The variables declared outside the function or any block can be accessed by any function.  

For example :  

```js
let name = "Sumit";//global variable
function showMessage(){
  console.log('Hello '+ name);
}
```  

### Parameters  

We can pass arbitrary data to functions using parameters (also called function arguments) . That parameter can be used inside the function.  
 For example : 
 ```js
function showMessage(parameter goes here){
  //use that parameter
}
```