(function() {
  var Banana, PeeledBanana, Strawberry, assert, theGoodThings, vows;
  vows = require('vows');
  assert = require('assert');
  theGoodThings = require('../src/the_good_things');
  Strawberry = theGoodThings.Strawberry;
  Banana = theGoodThings.Banana;
  PeeledBanana = theGoodThings.PeeledBanana;
  vows.describe("The Good Things").addBatch({
    'A strawberry': {
      topic: new Strawberry,
      'is red': function(strawberry) {
        return assert.equal(strawberry.color, '#ff0000');
      },
      'and tasty': function(strawberry) {
        return assert.isTrue(strawberry.isTasty());
      }
    },
    'A banana': {
      topic: new Banana,
      'when peeled *synchronously*': {
        topic: function(banana) {
          return banana.peelSync();
        },
        'returns a `PeeledBanana`': function(result) {
          return assert.instanceOf(result, PeeledBanana);
        }
      },
      'when peeled *asynchronously*': {
        topic: function(banana) {
          return banana.peel(this.callback);
        },
        'results in a `PeeledBanana`': function(error, result) {
          return assert.instanceOf(result, PeeledBanana);
        }
      }
    }
  })["export"](module);
}).call(this);
