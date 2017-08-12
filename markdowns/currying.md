# Currying
Currying is the technique of translating the evaluation of a function that takes multiple arguments into **evaluating a sequence of functions, each with a single argument**.

This becomes very easy using lambda functions and closures. So let's dive straight into code:

@[Get the even numbers in an array]({ "stubs": ["currying/example1.js"], "command": "node currying/example1.js" })

So why is this useful? Because we are now able to pass the arguments at **different points in time**, this means that we can use currying to "construct" a function.

E.g.
@[Generic filter callback to check any property of an object]({ "stubs": ["currying/example2.js"], "command": "node currying/example2.js" })

And now time to get your hands dirty: remember the `applyCoupon` function we wrote in the previous chapter? It was very specific, now we want to create a curryable function that takes as arguments (in this order) category, discount between 0 and 1 (0.8 = 80% discount) and then an item and returns the item with the correct price.  
Remember to apply the discount only to the right items!

@[Implement `applyCoupon` as a curriable function]({ "stubs": ["currying/applyCoupon2.js"], "command": "node_modules/mocha/bin/mocha currying/applyCoupon2.spec.js --reporter list"})
