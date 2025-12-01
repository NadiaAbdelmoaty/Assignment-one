1. What is the difference between forEach and for...of? When would you use ?.
 forEach doesn’t wait for an asynchronous operation to finish. If the operation takes time, it moves on to the next item immediately.

But for...of waits for the operation to finish first, then moves to the next item.
I use forEach when the next operation doesn’t depend on the previous one. But if the operations depend on each other, I use for...of.

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
  Hoisting is the process of defining variables or functions in a certain scope or in the global scope. Whether something gets hoisted or not depends on its type and which scope it belongs to.
The Temporal Dead Zone (TDZ) means that if I’m inside a scope and try to use a variable that is declared at the end of that scope, it stays “unavailable” for a period of time. This happens especially with let and const variables.
console.log(x)
const x = 5

3. What are the main differences between == and ===?
The === operator compares both value and data type, while == compares only the value.

4.  Explain how try-catch works and why it is important in async operations.
   I use the try block to put the code that I expect might cause an error, so if an error happens, the code doesn’t stop and the catch block runs instead. The catch usually receives the error.
 It's especially important with async/await because we work with promises and rejections, so the error gets thrown inside the try block.

5. What’s the difference between type conversion and coercion? Provide examples of each.
    (searching)
   Type Conversion →
   Number("123");   
   String(50);    
   Boolean(1); You convert it yourself
  Type Coercion →
  "5" + 3 
JavaScript converts it automatically
7. شىس
8. ال
