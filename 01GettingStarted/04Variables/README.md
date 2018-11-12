# Variables  

Most of the time, we work with data and that data must be stored so that it can be futher used.  
At that place, variables come in existance.  

## What are variables ?  

A variable in simple terms is a storage place which has some memory allocated to it. Basically, a variable used to store some form of data. Different types of variables require different amounts of memory, and have some specific set of operations which can be applied on them.  

## Variables in Javascript  

To create a variable in JavaScript, we need to use the *let* or *var* keyword.  

But what is the difference between *let* and *var* ?  

*let* gives you the privilege to declare variables that are limited in scope to the block, statement of expression unlike var.

*var* is rather a keyword which defines a variable globally regardless of block scope.  

[Learn more about the difference in let and var](https://codeburst.io/difference-between-let-and-var-in-javascript-537410b2d707 "Diiference in let and var")  
[More about scope of variables](https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/ "Scope of variables")  

## Rules for variable name(var_name)    

The var_name is the name of the variable which should be defined by the user and should be unique. These type of names are also known as *identifiers*. The rules for creating an identifier in JavaScript are :      
  * The name of the identifier should not be any pre-defined keyword.   
  * The first character must be a letter, an underscore (_), or a dollar sign ($).   
  * Subsequent characters may be any letter or digit or an underscore or dollar sign.  


## Declaration of variables in Javascript    

We can initialize the variables either at the time of declaration or also later when we want to use them. Below are some examples of declaring and initializing variables in JavaScript:  

```javascript
// declaring single variable
var name;

// declaring multiple variables
var name, title, num;

// initializng variables
var name = "Sumit";
name = "Amit";

```  

## Variable scope in javascript  

Scope of a variable is the part of the program from where the variable may directly be accessible.  

In JavaScript, there are two types of scopes:  
  * Global Scope – Scope outside the outermost function/block attached to Window  
  * Local Scope – Inside the function/block being executed  

For example : 

```javascript

<script type = "text/javascript"> 
var globalVar = "This is a global variable"; 
  
function fun() { 
  var localVar = "This is a local variable"; 
  
  console.log(globalVar); 
  console.log(localVar); 
} 
  
fun(); 
< /script> 
```  

[More about scope of variables](https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/ "Scope of variables")  