# Functors
Remember when we talked about `map`? We only used map on arrays, but you can actually implement `map` on other data structures, e.g. trees, streams, promises, ...  

**Any type that has a map function is a functor**

You should understand the concept of map by now, but if you a real nitpicker you will now ask "How do we define map?". One of the best definition is given by [haskell's functor laws](https://wiki.haskell.org/Functor), for the interested people I will translate them into JavaScript:

```
// identity
myFunctor.map( x => x) === myFunctor

// composition === chaining
myFunctor.map( x => f(g(x)) ) === myFunctor.map(g).map(f)
```

> In the code above I used `===` to keep it simple, but I should have checked for deep equality, if you don't know what this means don't worry, you should be able to understand the meaning anyway; nonetheless if you want to learn more about it [this](https://stackoverflow.com/questions/1068834/object-comparison-in-javascript) stackoverflow thread is a good place to start.

The advantage of using a functor is that the container is now abstracted away, e.g. in streams we don't need to care about asynchronous data handling, we can just use a stream like an array.

Another cool feature of functors is that you can chain `map` calls, because the `map` function returns another functor.
@[Chaining]({ "stubs": ["functors/chain.js"], "command": "node functors/chain.js" })

So why don't we create our own functor?
@[The Tuple Functor]({ "stubs": ["functors/tuple.js"], "command": "node functors/tuple.js" })

# Monads
Let's start with an exercise: let's write a function that duplicates every item in an array (e.g. [1,2,3] --> [1,1,2,2,3,3]).  
Let's first try with map:
@[map implementation]({ "stubs": ["functors/duplicateMap.js"], "command": "node functors/duplicateMap.js" })

Running the code you see that the result is not quite what we wanted: [[1,1],[2,2],[3,3]], wouldn't it be great if we had a function that automatically "flattened" the array we returned into [1,1,2,2,3,3]? That's `flatMap`!

@[flatMap implementation]({ "stubs": ["functors/duplicateFlatMap.js"], "command": "node functors/duplicateFlatMap.runner.js" })  
> The `flatMap` function was implemented by me, because it's not provided by javascript [yet](https://tc39.github.io/proposal-flatMap/); we'll deal with the details later.
