# Comparisons  

We know many comaparison operators (as studied in maths).
Some of them are :  
  * Greater/less than: a > b, a < b.  
  * Greater/less than or equals: a >= b, a <= b.  
  * Equality check is written as a == b.  
  * Not equals: a != b.  

### Result of Comparison  

The value returned by comparison is boolean.  
  * *true* : means result is true, accepted, yes or correct.  
  * *false* : means result is false, not accepted, no or incorrect.  

A comparison result can be assigned to a variable, just like any value:  

```javascript
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true
```  

### Some examples of comparisons  

  * **String Comparison**

    ```javascript
    alert( 'Z' > 'A' ); // true
    alert( 'Glow' > 'Glee' ); // true
    alert( 'Bee' > 'Be' ); // true
    ```  

    In the above example string comparison is there. The algorithm is very simple. Start comparing with the first letter of the string, if both are same then move to the next letter otherwise the letter having the higher ascii code will be considered as the bigger one.  

  * **Comparison of different types**  
    When compared values belong to different types, they are converted to numbers.  
    ```javascript
    alert( '2' > 1 ); // true, string '2' becomes a number 2
    alert( '01' == 1 ); // true, string '01' becomes a number 1
    //for boolen true becomes 1 and false becomes 0
    alert( true == 1 ); // true
    alert( false == 0 ); // true  

### Strict equality  

A regular equality check == has a problem. It cannot differ between 0 and false. That's because operands of different types are converted to a number by the equality operator ==. An empty string, just like false, becomes a zero.  

```javascript
alert( 0 == false ); // true
alert( '' == false ); // true
```  

So what if we want to differentiate 0 and false ?  

**A strict equality operator === checks the equality without type conversion.**  

```javascript
alert( 0 === false ); // false, because the types are different
```  

There also exists a "strict non-equality" operator !==, as an analogy for !=.

The strict equality check operator is a bit longer to write, but makes it obvious what's going on and leaves less space for errors  

### Comparison with null and undefined  

There's a non-intuitive behavior when null or undefined are compared with other values.

For a strict equality check === : These values are different, because each of them belongs to a separate type of its own.  

```js
alert( null === undefined ); // false
```  

For a non-strict check == : There's a special rule. These two are a "sweet couple": they equal each other (in the sense of ==), but not any other value.  

```js
alert( null == undefined ); // true
```  

For maths and other comparisons < > <= >= : Values null/undefined are converted to a number: null becomes 0, while undefined becomes NaN.  

### null vs 0  

Have a look at the code :  
```js
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) *!*true*/!*
```

Yeah, mathematically that's strange. The last result states that "null is greater than or equal to zero". Then one of the comparisons above must be correct, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, hence treat it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don't equal anything else. That's why (2) null == 0 is false.

