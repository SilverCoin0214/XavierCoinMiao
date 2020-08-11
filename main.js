// define(function(require, module, exports) {
  // CMD Common Module Definition
  // CommonJS Module
  // var foo = "monthday.js"
  // var monthDay = require(foo)
  var weekday = require('./weekday.js')
  var _ = require('./lodash.js')


  var ary = [0, 2, 5, 4]

  var names = ary.map(weekday.name)

  console.log(_.chunk(names, 2))

// })
