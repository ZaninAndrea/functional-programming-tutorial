**Functional programming** is one of those things that you probably heard about, but never approached, because it looked too hard or too theoretical. Wait no more! In this course, I'll introduce you to functional programming through examples and exercises in a familiar language: JavaScript.  
As a reference, here are the topics we'll talk about:  
- Pure functions
- Higher Order Functions
- Currying
- Recursion
- Functors
- Monads

You need to know basic JavaScript usage; if you never programmed in JavaScript, you can checkout [this quick intro](https://learnxinyminutes.com/docs/javascript/) and come back, I'll wait for you.

Open Source is <3, so here is the [repository](https://github.com/ZaninAndrea/playground-przgjbPq) for this playground, feel free to contribute, clone, ...

# Pure Functions  
I admit it, I lied to you: we need a tiny bit of theory to get started.  
One key concept of functional programming is that functions should not have side-effects and should not depend on external state, i.e. a function should take some input and return some output without modifying or accessing any value outside the function.

If calling a function without using its return value makes sense, it is a sign that the function is not pure; you would never do that with a pure function.  
For example, this is a pure function:

``` js
function add2 (x){
  return x + 2
}
```

And this is not:
``` js
var y = 2
function adder (x){
  return x + y
}
```

The great benefit of pure functions is that their output is **deterministic**: given an input it will always return the same value. This characteristic makes them extremely easy to debug. For example, given the input `12`, our `add2` function above  will always return `14`.

Now time for some code:
@[Implement the pure function `greet` following the specification]({ "stubs": ["pure/pure1.js"], "command": "node_modules/mocha/bin/mocha pure/pure1.spec.js --reporter list" })
