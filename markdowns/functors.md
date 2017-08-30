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
Giving a definition of monad is somewhat tedious and requires a bit of theory, so we are first going to build an intuition for them through examples.
## Array Monad
Let's write a function that duplicates every item in an array (e.g. `[1,2,3]` --> `[1,1,2,2,3,3]`).  
Let's first try with map:
@[map duplicate]({ "stubs": ["functors/duplicateMap.js"], "command": "node functors/duplicateMap.js" })

Running the code you see that the result is not quite what we wanted: `[[1,1],[2,2],[3,3]]`, wouldn't it be great if we had a function that automatically "flattened" the array we returned into `[1,1,2,2,3,3]`? That's `flatMap`!

@[flatMap duplicate]({ "stubs": ["functors/duplicateFlatMap.js"], "command": "node functors/duplicateFlatMap.runner.js" })

> The `flatMap` function was implemented by me, because it's not provided by javascript [yet](https://tc39.github.io/proposal-flatMap/); we'll deal with the details later.

As you can see flatMap's callback returns another monad and flatMap's job is handling the unpacking. If you are interested in the details of the implementation here's my code:
@[flatMap implementation]({ "stubs": ["functors/flatMapImplementation.js"], "command": "node functors/flatMapImplementation.js" })

Although array's implementation of `flatMap` is very interesting and useful it's not the only one: we can for example use flatMap to maintain knowledge of previous states of a system, as always let's start with an example.

## Gambler Monad
Let's say we want to create a model for a gambler: the gambler plays multiple times at the roulette, sometimes he wins and sometimes he loses, but if he goes bankrupt he gets kicked out of the casino and cannot recover. We want to simulate a number of games and see if at the end the gambler still has money or not.

We cannot simply add up wins and losses, because we would ignore intermediate states. The following is a **wrong solution**:
@[map implementation]({ "stubs": ["functors/wrongGambler.js"], "command": "node functors/wrongGambler.js" })

What we need is a model that stops computing the transactions after he went bankrupt, like the following:
@[map implementation]({ "stubs": ["functors/correctGambler.js"], "command": "node functors/correctGambler.js" })

This time we used `flatMap` to remember past states, but again the callback returned a new monad and `flatMap` handled the unwrapping of the original monad content.

## Wrapping up
Monads are a broad definition, but they all share one characteristic: they implement `flatMap`, which in term is useful to maintain knowledge of the **context** in which a function is being executed.
