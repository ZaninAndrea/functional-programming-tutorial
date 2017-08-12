var assert = require('assert');
var isPrime = require('./isPrime.js'); // to allow reference to previously defined functions
var isNotPrime = require('./isNotPrime.js');
var _ = require('underscore') // needed to have support for the reject function

var rejectUsed = false;
var failed = false;
var superReject = _.reject;
_.reject = function() {
  rejectUsed = true;
  return superReject.apply(this, arguments);
};
describe('tests: ', function() {
  it('should return the regular items', function() {
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
          "name": "Biscuits",
          "type": "regular"
        },
        {
          "name": "dress",
          "type": "regular"
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
          "name": "pen",
          "type": "regular"
        },
        {
          "name": "Cheese",
          "type": "regular"
        },
        {
          "name": "Biscuits",
          "type": "regular"
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
      var solution3 = [{
          "name": "Biscuits",
          "type": "regular"
        },
        {
          "name": "dress",
          "type": "regular"
        }
      ]
      assert.deepEqual(solution, isNotPrime.notPrimeItems(cart));
      assert.deepEqual(solution2, isNotPrime.notPrimeItems(cart2));
      assert.deepEqual(solution3, isNotPrime.notPrimeItems(cart3));

    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You can check the property `type` to find out whether it is prime or not');
      throw error;
    }
  });

  it('should use reject', function() {
    try {
      assert(rejectUsed);
    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You should use the `reject` function!');
      throw error;
    }
  })
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
