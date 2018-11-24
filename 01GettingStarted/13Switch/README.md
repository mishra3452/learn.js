## Switch  

Switch is used to avoid multiple if.  

Syntax : 

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```  

  * The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.  
  * If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).  
  * If no case is matched then the default code is executed (if it exists).  
  * If no break is there then next case will be executed without checking condition.  
