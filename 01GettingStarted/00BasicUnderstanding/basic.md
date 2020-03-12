# Some Theory  

## Statements  

JavaScript statements are composed of:

Values, Operators, Expressions, Keywords, and Comments.  

These are the commands that perform actions.  
For example : alert("Hello World!") is a statement which prints "Hello World!".  

There can be as many statements as possible. Statements are separated from each other by (";") semicolon.  
For example : alert("Hello World!"); is same as alert("Hello");alert("World!");  

*NOTE :* It is not necessary to give (";") but it is a good practice to give (";").  

## Semicolon (";")  

alert("Hello");  
alert("js");  

will work same as :  

alert("Hello")  
alert("js")    

In most cases a newline implies a semicolon. But "in most cases" does not mean "always"!  

For example :   
alert(3 +  
1  
+ 2);  

Here newline doesn't mean (";").  

But there are situations where JavaScript "fails" to assume a semicolon. So it is advised to use semicolon.  

## Comments  

Comments are the most important part of any program. A well commented program is a must.  

As time goes on, the program becomes more and more complex. It becomes necessary to add comments which describe what happens and why.  

  * Single line comment in js :  

  use "//" to comment. For example : alert("hello"); //This is a single line comment.

  * Multiple line comment in js :  

  use "/* " to start commenting and " */" to end commenting.  
