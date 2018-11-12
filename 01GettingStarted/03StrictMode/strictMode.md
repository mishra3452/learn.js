# Strict Mode in Javascript  

For a long time JavaScript was evolving without compatibility issues. New features were added to the language, but the old functionality did not change.  

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context.  

It had been so until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most modifications are off by default. One needs to enable them explicitly with a special directive "use strict".  

#### Benifits of using ‘use strict’  

Strict mode makes several changes to normal JavaScript semantics.  
  * Strict mode eliminates some JavaScript silent errors by changing them to throw errors.  
  * Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.  
  * Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.  
  * It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).  
  * It disables features that are confusing or poorly thought out.  
  * Strict mode makes it easier to write “secure” JavaScript.  

#### How to use strict mode ?  

Looking ahead let's just note that "use strict" can be put at the start of a function (most kinds of functions) instead of the whole script. Then strict mode is enabled in that function only. But usually people use it for the whole script.  

For example :  

Please make sure that `"use strict"` is on the top of the script, otherwise the strict mode may not be enabled.
"
There is no strict mode here:

```js no-strict
alert("some code");
// "use strict" below is ignored, must be on the top

"use strict";

// strict mode is not activated
```

Only comments may appear above `"use strict"`. "  

[Learn more about strict mode](https://www.geeksforgeeks.org/strict-mode-javascript/ "Scrict mode")