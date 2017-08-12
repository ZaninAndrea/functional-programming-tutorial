# Recursion
A recursive function is a function that **calls itself** until it hits a **base case**, this is often used in recursive languages as a replacement for loops, because it is **far more flexible**. They key here is that each time the function calls itself the problem is reduced.

Just to understand the concept let's implement a countdown as a recursive function:

@[Countdown]({ "stubs": ["recursion/countdown.js"], "command": "node recursion/countdown.js" })

Recursion is much more powerful than loops, for example they are very useful to implement any algorithm of the "divide and conquer" family; we'll implement a simple algorithm that tells us whether a file is in a directory or in it's sub-directories.

@[Finding a file]({ "stubs": ["recursion/tree.js"], "command": "node recursion/tree.js" })

In this tiny example we used recursion, currying, higher order function and lambda expressions, which is nice per se, but most importantly we solved a problem that is unsolvable using only loops.

And now an exercise for you: from a list of `{id,parent}` objects you have to create the original structure. You can assume that every object has a unique id.  
E.g. this list
```
[
  { "id": "Grandad", "parent": null },
  { "id": "Dad", "parent": "Grandad" },
  { "id": "You", "parent": "Dad" },
  { "id": "Son", "parent": "You" },
  { "id": "Daughter", "parent": "You" },
  { "id": "Brother", "parent": "Dad" },
  { "id": "Nephew", "parent": "Brother" },
  { "id": "Niece", "parent": "Brother" },
  { "id": "Sister", "parent": "Dad" },
  { "id": "Uncle", "parent": "Grandad" },
  { "id": "Cousin", "parent": "Uncle" }
]
```

should become this
```
"Grandad": {
  "Dad": {
    "You": {
      "Son": {},
      "Daughter": {}
    },
    "Brother": {
      "Nephew": {},
      "Niece": {}
    },
    "Sister": {}
  },
  "Uncle": {
    "Cousin": {}
  }
}
}
```

> **Hint:** the subtrees are smaller version of the treeBuilding problem, can you figure out what the base case is?

@[Finding a file]({ "stubs": ["recursion/buildTree.js"], "command": "node_modules/mocha/bin/mocha recursion/buildTree.spec.js --reporter list" })
