# Type Conversions  

Most of the time, operators and functions automatically convert a value to the right type. That's called "type conversion".

For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.  

This type conversion can also be done explicitely. Some examples are :  

### To String  

String conversion happens when we need the string form of a value.  

We can use a call **String(value)** function for that.  

```javascript
let value = true;

value = String(value); // now value is a string "true"
alert(typeof value); // string
```  

### To Number  

Numeric conversion happens in mathematical functions and expressions automatically.

For example, when division / is applied to non-numbers:  

```javascript
alert( "6" / "2" ); // 3, strings are converted to numbers
```  

We can use a Number(value) function to explicitly convert a value.  

**If the string is not a valid number, the result of such conversion is NaN.**  

  * *undefined* becomes NaN  
  * *null* becomes 0  
  * *true* and *false* becomes 1 and 0  
  * for *strings* Whitespaces from the start and the end are removed. Then, if the remaining string is empty, the result is 0. Otherwise, the number is "read" from the string. An error gives NaN.  

**NOTE : Almost all mathematical operations convert values to numbers. With a notable exception of the addition `+`. If one of the added values is a string, then another one is also converted to a string. Then it concatenates (joins) them. This only happens when one of the arguments is a string. Otherwise, values are converted to numbers.**  

### To Boolean  

The conversion rule:  
  * Values that are intuitively "empty", like 0, an empty string, null, undefined and NaN become false.  
  * Other values become true.  

