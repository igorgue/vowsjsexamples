(function() {
  var assert, vows;
  vows = require('vows');
  assert = require('assert');
  vows.describe("Division by Zero").addBatch({
    'when dividing a number by zero': {
      topic: function() {
        return 42 / 0;
      },
      'we get Infinity': function(topic) {
        return assert.equal(topic, Infinity);
      }
    },
    'but when dividing zero by zero': {
      topic: function() {
        return 0 / 0;
      },
      'we get a value which': {
        'is not a number': function(topic) {
          return assert.isNaN(topic);
        },
        'is not equal to itself': function(topic) {
          return assert.notEqual(topic, topic);
        }
      }
    }
  }).run();
}).call(this);
