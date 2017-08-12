var assert = require('assert');
var isPrime = require('./isPrime.js');

var filterUsed = false;
var failed = false;
var superFilter = Array.prototype.filter;
Array.prototype.filter = function() {
  filterUsed = true;
  return superFilter.apply(this, arguments);
};
describe('tests: ', function() {
  it('should return the prime items', function() {
    try {
      var cart = [{
          "name": "Biscuits",
          "type": "regular"
        },
        {
          "name": "Monitor",
          "type": "prime"
        },
        {
          "name": "Mouse",
          "type": "prime"
        },
        {
          "name": "dress",
          "type": "regular"
        }
      ]
      var solution = [{
          "name": "Monitor",
          "type": "prime"
        },
        {
          "name": "Mouse",
          "type": "prime"
        }
      ]
      var cart2 = [{
          "name": "E-Book",
          "type": "prime"
        },
        {
          "name": "pen",
          "type": "regular"
        },
        {
          "name": "Cheese",
          "type": "regular"
        },
        {
          "name": "Bike",
          "type": "prime"
        },
        {
          "name": "Biscuits",
          "type": "regular"
        },
        {
          "name": "Monitor",
          "type": "prime"
        }
      ]
      var solution2 = [{
          "name": "E-Book",
          "type": "prime"
        },
        {
          "name": "Bike",
          "type": "prime"
        },
        {
          "name": "Monitor",
          "type": "prime"
        }
      ]
      var cart3 = [{
          "name": "Biscuits",
          "type": "regular"
        },
        {
          "name": "dress",
          "type": "regular"
        }
      ]
      var solution3 = []
      assert.deepEqual(solution, isPrime.primeItems(cart));
      assert.deepEqual(solution2, isPrime.primeItems(cart2));
      assert.deepEqual(solution3, isPrime.primeItems(cart3));

    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You can check the property `type` to find out whether it is prime or not');
      throw error;
    }
  });

  it('should use filter', function() {
    try {
      assert(filterUsed);
    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You should use the `filter` function!');
      throw error;
    }
  })
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
