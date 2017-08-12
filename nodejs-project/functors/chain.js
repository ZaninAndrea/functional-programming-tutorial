const arr = [1,2,3,4]

// ADD 2 THEN DOUBLE

// WITHOUT CHAINING
const arr2 = arr.map( x => x + 2)
const final = arr2.map( x => 2 * x)

// WITH CHAINING
const chained = arr.map( x => x + 2).map( x => 2 * x)
