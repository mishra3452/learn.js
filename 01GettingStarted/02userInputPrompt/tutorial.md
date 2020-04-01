# User Input  `PROMPT`


prompt is a function `(functions are described in tutorial no. 14)`  which is used in javaScript to pop up a dialogue box in the browser to let the user to input something.

> ### Difference b/w alert and prompt functions

Purpose      | `alert()`     | `prompt()`
-------------|---------------| -------------
|Type        | Function      |  Function
|Use         | output data   |  user input

### syntax
```
prompt("Enter Something");
```
the above code will prompt a dialogue box in the browser and will ask the user to input.

you need to store the value entered by the user into somewhere to use it.

```
var age = prompt ("Enter your age : ");
```
users age will be stored in age variable.

To output the age use `alert();`.

below is the code :

```
alert("your age is : " + age);
```

### alternate to alert();
using alert() is'nt always a good idea 
you can ouptut the user using

```
    document.write("hello");
```
the code above will output 'hello' in the browser

> Exercise
* Take input from the user asking `"Enter your name , age and city` and ouput it using document.write function". 
 