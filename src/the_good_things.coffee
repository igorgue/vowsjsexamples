class Strawberry
  color: '#ff0000'
  isTasty: -> true

class Banana
  color: '#fff333'
  peel: (callback) ->
    process.nextTick ->
      callback(null, new PeeledBanana)
  peelSync: -> new PeeledBanana

class PeeledBanana

module.exports = {Strawberry, Banana, PeeledBanana}
