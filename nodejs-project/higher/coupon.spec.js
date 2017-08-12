var assert = require('assert');
var coupon = require('./coupon.js');

var mapUsed = false;
var superMap = Array.prototype.map;
Array.prototype.map = function() {
  mapUsed = true;
  return superMap.apply(this, arguments);
};
describe('tests: ', function() {
  it('should return the discounted items', function() {
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
        },
      ]
      var solution = [{
          name: 'Biscuits',
          type: 'regular',
          category: 'food',
          price: 2
        },
        {
          name: 'Monitor',
          type: 'prime',
          category: 'tech',
          price: 95.992
        },
        {
          name: 'Mouse',
          type: 'prime',
          category: 'tech',
          price: 20.400000000000002
        },
        {
          name: 'dress',
          type: 'regular',
          category: 'clothes',
          price: 49.9
        }
      ]
      var guess = coupon.applyCoupon(cart)
      var error = 0
      guess.forEach(function(element,idx){
        error+=Math.abs(element.price - solution[idx].price)
      })
      assert.equal(true, error < 0.01);

    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You can check the property `category` to find out whether it is a tech item or not');
      throw error;
    }
  });

  it('should use map', function() {
    try {
      assert(mapUsed);
    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You should use the `map` function!');
      throw error;
    }
  })
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
