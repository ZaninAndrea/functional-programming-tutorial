# Higher Order Functions
Higher Order Functions are functions that take other **functions as parameters**, Mind Blown 💥.  
We are going to discover how this functions are useful through some examples, in particular we are going to recreate the logic of the amazon checkout.  

# Filter
Filter is a method of arrays that accepts a **test function**, that returns `true` or `false`, as argument and returns a new array with only the elements that passed to the function returned `true`.  

Here is an example:  
@[Get the even numbers in an array]({ "stubs": ["higher/isEven.js"], "command": "node higher/isEven.js" })

As you can see the function `isEven` doesn't need to include the logic to handle arrays, and this is the great thing about these higher order function: now the decision logic is kept separate by the function applying it to the array, so we can reuse it.  

Let's try to implement our first piece of logic for the amazon cart: extracting from the `cart` array all the prime items

@[Implement `isPrime` and `primeItems`, for the latter use `filter`]({ "stubs": ["higher/isPrime.js"], "command": "node_modules/mocha/bin/mocha higher/isPrime.spec.js --reporter list",  "layout": "aside" })

# Reject
We can now reuse the `isPrime` function in conjunction with `reject` to get all the non-prime items in the cart. The reject function is the **opposite of the filter**: it creates an array with all the elements but those that satisfy the condition.  

Reject is not a built-in function in js, we are going to use the library `underscore.js` to have it. The syntax is slightly different: `_.reject(list, predicate)` where `_` is the underscore library

@[Implement the `notPrimeItems` function using `reject` (you can use functions defined in the other snippets)]({ "stubs": ["higher/isNotPrime.js", "higher/isPrime.js"], "command": "node_modules/mocha/bin/mocha higher/isNotPrime.spec.js --reporter list" , "layout": "aside" })

As an optional exercise you could also implement reject yourself using filter.

@[Implement the `reject` function using `reject`]({ "stubs": ["higher/implementReject.js"], "command": "node_modules/mocha/bin/mocha higher/implementReject.spec.js --reporter list"})

# Lambda functions
When defining short functions it's often convenient to use an alternative syntax called lambda function, that allows us to define anonymous functions in a more compact way: `( /*arguments*/ ) => { /*code*/ }` and if our function is only a return statement we can strip the curly brackets and avoid writing `return`: `( /*arguments*/ ) => /*value to return*/`.

We can rewrite the `isEven` snippet from before with a lambda function:

@[Get the even numbers in an array]({ "stubs": ["higher/isEvenLambda.js"], "command": "node higher/isEvenLambda.js" })


# Map
Another very useful higher order function is `map`: **it takes a function and applies it to all the elements of an array**.  
The syntax is identical to `filter`  
E.g.

@[Squaring all the elements of an array]({ "stubs": ["higher/square.js"], "command": "node higher/square.js"})

Now back to our amazon example: we can use `map` to apply a coupon. The `applyCoupon` function should apply a 20% discount on all the tech items.

@[Implement the applyCoupon function]({ "stubs": ["higher/coupon.js"], "command": "node_modules/mocha/bin/mocha higher/coupon.spec.js --reporter list",  "layout": "aside" })

# Reduce: one function to rule them all
Reduce is the last higher order function we are going to discuss and it's also the most powerful: in fact you can implement **any list transformation** with reduce.  
Reduce takes in a callback function and a starting value, the function takes as arguments an accumulator and the value of the current element of the array and returns the accumulator to be used in the next cycle. The value returned from the last call of the callback function is the value returned by `reduce`.

It's easier if I show you some examples:

@[Multiplying all the elements of an array]({ "stubs": ["higher/multiply.js"], "command": "node higher/multiply.js"})
@[Implementing map with reduce]({ "stubs": ["higher/implementMap.js"], "command": "node higher/implementMap.js"})

Now to complete our amazon workflow write a function that returns the total cost of the order.

@[Implement the `totalCost` function using `reduce`]({ "stubs": ["higher/totalCost.js"], "command": "node_modules/mocha/bin/mocha higher/totalCost.spec.js --reporter list" , "layout": "aside" })
