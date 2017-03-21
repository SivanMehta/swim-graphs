const women = require("./base-times-women.json")
const moment = require('moment')

function toSeconds(time) {
  const parsed = moment(time, ["ss.SS", "m:ss.SS", "mm:ss.SS"])
  return parsed.minutes() * 60 + parsed.seconds() + (parsed.milliseconds() / 1000)
}
Object.keys(women).map(key => {
  women[key] = String(toSeconds(women[key]))
})

console.log(women)
