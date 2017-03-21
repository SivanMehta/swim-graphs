const moment = require('moment')

exports.toSeconds = function (time) {
  const parsed = moment(time, ["ss.SS", "m:ss.SS", "mm:ss.SS"])
  return parsed.minutes() * 60 + parsed.seconds() + (parsed.milliseconds() / 1000)
}
