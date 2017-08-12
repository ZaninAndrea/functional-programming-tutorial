var assert = require('assert');
var totalCost = require('./totalCost.js');

var reduceUsed = false;
var superreduce = Array.prototype.reduce;
Array.prototype.reduce = function() {
  reduceUsed = true;
  return superreduce.apply(this, arguments);
};
describe('tests: ', function() {
  it('should return the prime items', function() {
    try {
      var cart = [{
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 2.0
        },
        {
          "name": "Monitor",
          "type": "prime",
          "category": "tech",
          "price": 119.99
        },
        {
          "name": "Mouse",
          "type": "prime",
          "category": "tech",
          "price": 25.50
        },
        {
          "name": "dress",
          "type": "regular",
          "category": "clothes",
          "price": 49.90
        }
      ]
      var solution = cart.reduce((acc,x)=> acc+x.price, 0)
      var error = Math.abs(solution - totalCost.totalCost(cart))
      assert(error < 0.01);

    } catch (error) {
      printMessage('Hint 💡', 'You should sum the prices of every item');
      throw error;
    }
  });

  it('should use reduce', function() {
    try {
      assert(reduceUsed);
    } catch (error) {
      printMessage('Hint 💡', 'You should use the `reduce` function!');
      throw error;
    }
  })
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
