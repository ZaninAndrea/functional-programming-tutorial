const assert = require('assert');
const applyCoupon2 = require('./applyCoupon2.js');

describe('applyCoupon', function() {
  it ('should be curriable', function (){
    try{
      applyCoupon2.applyCoupon("tech")(0.8)({
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 2.0
        })
    } catch (error){
      printMessage('Hint 💡', 'You can use a lambda expression to define curriable functions');
      throw error;
    }
  })

  it('should return the discounted item', function() {
    try {
      const test = {
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 2.0
        }
      const test2 = {
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 2.0
        }
      const test3 = {
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 2.0
        }

      const solution1 = {
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 2.0
        }
      assert.deepEqual(applyCoupon2.applyCoupon("tech")(0.8)(test), solution1)

      const solution2 = {
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 1.0
        }
      assert(Math.abs(applyCoupon2.applyCoupon("food")(0.5)(test2).price - solution2.price)<0.01)

      const solution3 = {
          "name": "Biscuits",
          "type": "regular",
          "category": "food",
          "price": 1.8
        }
      assert(Math.abs(applyCoupon2.applyCoupon("food")(0.1)(test3).price - solution3.price)<0.01)

    } catch (error) {
      printMessage('Hint 💡', 'You can check the property `price` to find out its price');
      throw error;
    }
  });
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
