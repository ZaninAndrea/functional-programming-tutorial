﻿var assert = require('assert');
var pure1 = require('./pure1.js');

it('should greet', function () {
  try {
    assert.equal("Hi, Alex", pure1.greet("Alex"));
    assert.equal("Hi, Tim", pure1.greet("Tim"));
    assert.equal("Hi, Pete", pure1.greet("Pete"));

    printMessage('Great Job', 'Time to move on, many challenges await you');

  } catch (error) {
    printMessage('Hint 💡', 'Did you return the greeting?');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
