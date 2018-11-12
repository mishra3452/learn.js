# Datatypes in Javascript  

There are majorly two types of languages. First, one is *Statically typed* language where each variable and expression type is already known at compile time. Once a variable is declared to be of a certain data type, it cannot hold values of other data types.Example: C, C++, Java. Other, *Dynamically typed* languages: These languages can receive different data types over the time. For example- Ruby, Python, JavaScript etc.  

JavaScript is dynamically typed scripting language. That is, in javascript variables can receive different data types over the time. Datatypes are basically type of data that can be used and manipulated in a program.  

A variable in JavaScript can contain any data. A variable can at one moment be a string and later receive a numeric value :  

```javascript
let message = "hello";
message = 123456;
```  

There are seven basic data types in JavaScript. Here we'll study the basics :  

### 1. Number  

The number type serves both for integer and floating point numbers.
```javascript
let n = 123;
n = 12.345;
```  

Besides regular numbers, there are so-called "special numeric values" which also belong to that type: **Infinity, -Infinity and NaN**.  
  * *Infinity* represents the mathematical *Infinity ∞*.  
  ```javascript
  alert( 1 / 0 );    // Infinity
  alert( Infinity ); // Infinity  
  ```  
  * *NaN* represents a computational error. It is a result of an incorrect or an undefined mathematical operation  
  ```javascript
  alert( "not a number" / 2 ); // NaN
  ```  

Doing maths is safe in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.  

### 2. String  

A string in JavaScript must be quoted.

```javascript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;
```  

In JavaScript, there are 3 types of quotes.  
  * Double quotes: "Hello".
  * Single quotes: 'Hello'.
  * Backticks: `Hello`.  

Double and single quotes are "simple" quotes. There's no difference between them in JavaScript.

Backticks are "extended functionality" quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:  

```javascript
let name = "Js";

// embed a variable
alert( `Hello, *!*${name}*/!*!` ); // Hello, Js!

// embed an expression
alert( `the result is *!*${1 + 2}*/!*` ); // the result is 3
```

### 3. boolean (logical type)  

The boolean type has only two values: true and false.   

### 4. "null" value  

The special null value does not belong to any type of those described above.  

```javascript
let age = null;
```  

In JavaScript null is not a "reference to a non-existing object" or a "null pointer" like in some other languages.

It's just a special value which has the sense of "nothing", "empty" or "value unknown".  

### 5. "undefined" value  

The special value undefined stands apart. It makes a type of its own, just like null.

The meaning of undefined is "value is not assigned".  

```javascript
let age;
console.log(age); //undefined
```  

### 6. object  

For more complex data structures.

### 7. Symbol  

For unique identifiers.
