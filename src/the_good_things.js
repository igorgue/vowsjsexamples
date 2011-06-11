(function() {
  var Banana, PeeledBanana, Strawberry;
  Strawberry = (function() {
    function Strawberry() {}
    Strawberry.prototype.color = '#ff0000';
    Strawberry.prototype.isTasty = function() {
      return true;
    };
    return Strawberry;
  })();
  Banana = (function() {
    function Banana() {}
    Banana.prototype.color = '#fff333';
    Banana.prototype.peel = function(callback) {
      return process.nextTick(function() {
        return callback(null, new PeeledBanana);
      });
    };
    Banana.prototype.peelSync = function() {
      return new PeeledBanana;
    };
    return Banana;
  })();
  PeeledBanana = (function() {
    function PeeledBanana() {}
    return PeeledBanana;
  })();
  module.exports = {
    Strawberry: Strawberry,
    Banana: Banana,
    PeeledBanana: PeeledBanana
  };
}).call(this);
