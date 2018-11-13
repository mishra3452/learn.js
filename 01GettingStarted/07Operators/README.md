# Operators  

Operators are symbols used within an expression or statement to specify the operations to be performed during evaluation of the expression.  

### Operand, Urnary and Binary 

  * An operand -- is what operators are applied to. For instance in multiplication 5 * 2 there are two operands: the left operand is 5, and the right operand is 2. Sometimes people say "arguments" instead of "operands".  

  * An operator is unary if it has a single operand. For example, the unary increment ++ increases the number by 1  
  ```javascript
  let x = 1;
  x++;
  alert( x ); // 2
  ```  

  * An operator is binary if it has two operands. For example + is a binary operator as it takes two opearands :  
  ```javascript
  let x = 1;
  let y = 2;
  alert ( x+y ); //3  
  ```  

### Operators precedence  

If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, there's an implicit priority order among the operators.  

[Precedence Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence "Precedence Table")  

### Bitwise operators

Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:  

  * AND ( & )  
  * OR ( | )  
  * XOR ( ^ )  
  * NOT ( ~ )  
  * LEFT SHIFT ( << )  
  * RIGHT SHIFT ( >> )  
  * ZERO-FILL RIGHT SHIFT ( >>> )  
