const checkProperty = propertyName =>
                      expectedValue =>
                        object =>
                          object[propertyName] === expectedValue;

const candies = [
  {"soft":true, "flavour":"strawberry"},
  {"soft":false, "flavour":"strawberry"},
  {"soft":false, "flavour":"cherry"},
  {"soft":true, "flavour":"orange"},
  {"soft":false, "flavour":"lemon"},
];

const softCandies = candies.filter( checkProperty("soft")(true) ); // checkProperty("soft")(true) returns a function that accepts an object, exactly what we need
console.log(softCandies);

const strawberryCandies = candies.filter( checkProperty("flavour")("strawberry") );
console.log(strawberryCandies);
