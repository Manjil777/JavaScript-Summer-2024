### JS Version
- ECMAScript 2016
- Case Sensitivity
- Single Threaded
- Interpreted Language
- Dynamic Typing
- Weakly Typed
- First-class Functions
- Event-driven

### Declaring and Assigning Variables
- Use `let` to declare a variable
- Use camel case for naming a variable
- We can add escape characters to strings using backslashes `\"your_text\"`
- **Rules for naming a variable**
  - Variable names can only contain letters, numbers, underscores, or dollar signs
  - Variable names cannot start with a number
  - Variable names cannot contain spaces
  - Variable names are case-sensitive
  - Variable names should be descriptive
  - Variable names should be camel case
- Use variables to store values
- **Use of `let` vs `var`**
  - `let` is block-scoped
  - `var` is function-scoped
  - `const` is block-scoped
  - `let` can be reassigned
  - `var` can be reassigned
  - `let` is not hoisted
  - `var` is hoisted
  - `let` is not initialized
  - `var` is initialized
  - `let` is not assigned a value
  - `var` is assigned a value
  - `let` is not assigned a value

- **Hoisting**
  - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
  - Hoisting is JavaScript's default behavior of moving declarations to the top.
  - In JavaScript, a variable can be declared after it has been used.
  - In other words, a variable can be used before it has been declared.
  - Variable declaration using `let`, `const`, and `class` are not hoisted.

- **Example to Understand Hoisting Better**
```js
  const x = 1;
  {
      console.log(x); // ReferenceError
      const x = 2;
  }
```
- **Note**
- In the above example, we get error because
  - During the `Memory Creation Phase`, the JavaScript engine allocates memory for the all the global scope variable. When the block scope is encountered `let x` is declared (memory is reserved) but it is not initialized yet (not even with undefined).
  - During the `Execution Phase`, global scope variables are assigned with the value i.e. 1. When execution enters the block `{...}` all the variables declared with `let` and `const` within that block enter the Temporal Dead Zone (TDZ) from the beginning of the block until the actual line of the code where the variable is declared. Now when the execution reaches `console.log(x)`, it will try to find the local variable `x` (block scope variable) not the global scope variable `x` which is declared outside of the scope. Due to this `console.log(x)` cannot find the `x` as it is declared but not initialized. It is necessary that a variable is initialized to give it a memory location. This will result in a `ReferenceError` because the variable `x` is block-scoped and not hoisted.
### **Data Types**
- **Primitive Data Types**
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - Symbol
  - BigInt
- **Non-Primitive Data Types**
  - Object
  - Array
  - Function
  - Date
  - RegExp
- **Reference Data Types**
  - Object
  - Array
  - Function
  - Date
  - RegExp

### **Operators**
  - Arithmetic Operators : `+`, `-`, `*`, `/`, `%`, `++`, `--`
  - Assignment Operators : `=`, `+=`, `-=`, `*=`, `/=`, `%=`
  - Comparison Operators : `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
  - Logical Operators : `&&`, `||`, `!`
  - Bitwise Operators : `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
  - Ternary Operator : `? :`
  - Type Operators : `typeof`, `instanceof`
  - Comma Operator : `,`
  - Unary Operators : `+`, `-`, `++`, `--`, `!`
  - Relational Operators : `in`, `instanceof`

### **Conditional Statements**
  - If-else
  - Switch
  - For
  - While
  - Do-while
  - Break
  - Continue
  - Try-catch

### **Functions**
  - Function Declaration
  - Function Expression
  - Arrow Function
  - Function Constructor
  - Function Invocation
  - Function Parameters
  - Function Arguments
  - Function Scope
  - Function Hoisting
  - Function Closures
  - Function Recursion
  - Function Callbacks
  - Function IIFE
  - Function Currying
  - Function Composition

### **Arrays**
  - Array Declaration
  - Array Initialization
  - Array Properties
  - Array Methods
  - Array Iteration
  - Array Destructuring
  - Array Spread Operator
  - Array Concatenation
  - Array Copy
  - Array Sorting
  - Array Searching
  - Array Filtering
  - Array Mapping
  - Array Reducing
  - Array Slicing
  - Array Splicing
  - Array Merging
  - Array Flattening
  - Array Chunking
  - Array Reversing
  - Array Shifting
  - Array Popping
  - Array Pushing
  - Array Unshifting
  - Array Concatenating
  - Array Cloning
  - Array Copying
  - Array Swapping
  - Array Filling
  - Array Joining
  - Array Splitting
  - Array Filtering
  - Array Mapping
  - Array Reducing
  - Array Iterating
  - Array Searching
  - Array Sorting
  - Array Splicing
  - Array Slicing
  - Array Concatenating
  - Array Copying
  - Array Cloning
  - Array Merging
  - Array Flattening
  - Array Chunking
  - Array Reversing
  - Array Shifting
  - Array Popping
  - Array Pushing
  - Array Unshifting
  - Array Concatenating
  - Array Swapping
  - Array Filling
  - Array Joining
  - Array Splitting
  - Array Filtering
  - Array Mapping
  - Array Reducing
  - Array Iterating
  - Array Searching
  - Array Sorting
  - Array Splicing
  - Array Slicing
  - Array Concatenating
  - Array Copying
  - Array Cloning
  - Array Merging
  - Array Flattening
  - Array Chunking
  - Array Reversing
  - Array Shifting
  - Array Popping
  - Array Pushing
  - Array Unshifting
  - Array Concatenating
  - Array Swapping
  - Array Filling
  - Array Joining
  - Array Splitting
  - Array Filtering
  - Array Mapping
  - Array Reducing
  - Array Iterating

### DataTypes and Example
- Number : Example : 21
- String : Example : "Hello World"
- Boolean : true, false
- Object : Example : {key1: value1, key2: value2}
- Array : Example : [1, 2, 3, 4, 5]
- Null : null
- Undefined : undefined
- Symbol : Symbol('description')
- BigInt : 9007199254740991n
- Function : function myFunction() {}
- Date : new Date()
- RegExp : /ab+c/
- Error : new Error('error_message')
- Math : Math.PI
- JSON : JSON.parse('{"key": "value"}') 
- Promise : new Promise((resolve, reject) => {})
- Proxy : new Proxy({}, {})
- Reflect : Reflect.get()
- Intl : Intl.DateTimeFormat()
- WebAssembly : WebAssembly.instantiate() 
- ArrayBuffer : new ArrayBuffer()
- SharedArrayBuffer : new SharedArrayBuffer()
- DataView : new DataView() 
- TypedArray
- Float32Array
- Float64Array
- Int8Array
- Int16Array
- Int32Array

### String Properties and Methods
- toString()
- length
- toUpperCase()
- toLowerCase()
- indexOf('substring')
- lastIndexOf('substring')
- charAt(index)
- includes('substring')
- startsWith('substring')
- endsWith('substring')
- slice(start, end)
- substring(start, end)
- substr(start, length)
- replace('substring', 'new_substring')
- trim()
- split('separator')
- concat('string')
- repeat(n)
- padStart(n, 'string')
- padEnd(n, 'string')

### Booleans
- false
- true

### Type Checking 
- == : Compares values
- === : Compares values and types

### Constants
- const var_name = value

### Objects
- const obj = {
    key1: value1,
    key2: value2,
    key3: value3
}

```js
    const bird = {
        name: "Birat",
        age: 21,
        "isStudent": true
    };
```
- **Note**
  - We can access the values of an object using either dot notation or bracket notation
  - We use bracket notation when we want to access the value of a key using a variable
  - We use dot notation when we want to access the value of a key directly
  - Dot Notation : `console.log(bird.isStudent)` 
  - Bracket Notation : `console.log(bird["isStudent"])` 
- **Deleting a key-value pair from an object**
```js
    delete bird.age;
```
- **Adding a new key-value pair to an object**
```js
    bird.new_key = "new_value";
```
- **Checking if a key exists in an object**
```js
    console.log("name" in bird); // true
    console.log("age" in bird); // false
```
- **Iterating over an object**
```js
    for (let key in bird) {
        console.log(key, bird[key]);
    }
```
- **Modifying the value of a key in an object**
```js
    bird.name = "Birat";
```

### Execution Context
- **Global Execution Context**
  - The global execution context is created when the JavaScript engine starts executing the code.
  - The global execution context consists of two phases: the creation phase and the execution phase.
  - In the creation phase, the JavaScript engine creates the global object, the this object, and the outer environment.
  - In the execution phase, the JavaScript engine executes the code line by line.
  - The global execution context is created when the JavaScript engine starts executing the code.
  - The global execution context consists of two phases: the creation phase and the execution phase.
  - In the creation phase, the JavaScript engine creates the global object, the this object, and the outer environment.
  - In the execution phase, the JavaScript engine executes the code line by line.
- **Functional Execution Context**
  - The functional execution context is created when a function is called.
  - The functional execution context consists of two phases: the creation phase and the execution phase.
  - In the creation phase, the JavaScript engine creates the arguments object, the this object, the outer environment, and the variable object.
  - In the execution phase, the JavaScript engine executes the code line by line.
  - The functional execution context is created when a function is called.
  - The functional execution context consists of two phases: the creation phase and the execution phase.
  - In the creation phase, the JavaScript engine creates the arguments object, the this object, the outer environment, and the variable object.
  - In the execution phase, the JavaScript engine executes the code line by line.

### References
```js
    let animal = {
        name: "Dog",
        age: 21,
        "isStudent": true
    };
    
    let animal2 = animal;
    
    console.log(animal)
    console.log(animal2)
```
- Here when we assign `animal` to `animal2`, we are not creating a new object. Instead, we are creating a reference to the object `animal`. So, if we modify the value of a key in `animal`, the value of the same key in `animal2` will also be modified.
- The above example is an example of a shallow copy. If we want to create a deep copy, we can use the `Object.assign()` method.
```js
    let animal = {
        name: "Dog",
        age: 21,
        "isStudent": true
    };
    
    let animal2 = Object.assign({}, animal);
    
    console.log(animal)
    console.log(animal2)
```
- Another method to create a deep copy is using the spread operator
```js
    let animal = {
        name: "Dog",
        age: 21,
        "isStudent": true
    };
    
    let animal2 = {...animal};
    
    console.log(animal)
    console.log(animal2)
```
- If we check the id of the objects `animal` and `animal2`, they will be different. This is because we have created a deep copy of the object `animal`.
- **Note**
  - The spread operator is used to copy the properties of an object to another object. It is also used to copy the elements of an array to another array.

### Array
- const arr = [1, 2, 3, 4, 5];
- In JavaScript arrays are objects and the keys are the indices of the array
- **Adding elements to an array**
```js
    arr.push(6);
    arr.unshift(0);
    arr.splice(2, 0, 2.5);
```
- We can find the length of array using the length property.
- **Removing elements from an array**
```js
    arr.pop();
    arr.shift();
    arr.splice(2, 1);
```
- **Iterating over an array**
```js
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
```
- **Accessing array elements**
```js
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
```
- **Checking if an element exists in an array**
```js
    console.log(arr.includes(3)); // true
    console.log(arr.includes(6)); // false
```
- **Finding the index of an element in an array**
```js
    console.log(arr.indexOf(3)); // 2
    console.log(arr.indexOf(6)); // -1
```
- If we delete an element from an array using `delete arr[item_name]` the length of the array will not reduce. The element will be replaced by `undefined`.
  - To remove an element from an array, we can use the `splice()` method.
  - The `splice()` method takes two arguments. The first argument is the index of the element to be removed and the second argument is the number of elements to be removed.
  - If we want to remove multiple elements from an array, we can pass the number of elements to be removed as the third argument.
  - If we want to add elements to an array, we can pass the elements to be added as the third argument.
  - If we want to replace an element in an array, we can pass the element to be replaced as the third argument.
  - If we want to replace multiple elements in an array, we can pass the elements to be replaced as the third argument.
  - If we want to replace multiple elements in an array with multiple elements, we can pass the elements to be replaced as the third argument and the elements to be added as the fourth argument.