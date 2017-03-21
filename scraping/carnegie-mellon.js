//you need to copy and paste the following into a console to get the ids:
/*
swimmers = $("a[href*=swimmer]")
for(i = 0; i < swimmers.length; i++){
  console.log(swimmers[i].href)
}
*/

const async = require('async')
const scrape = require('./pull-data')

ids = [ 230365, 616062, 431239, 243692, 138305, 241049, 330478, 271394, 289068, 361980, 296605, 243606, 330393, 350978, 445698, 276955, 220606, 524473, 291138, 210182, 291810, 288434, 281950, 299734, 244205, 233047, 237152, 272478, 349336, 183988, 207663, 189790, 405637 ]
scrapers = ids.map(id => done => scrape(id = id, done))

console.log("date|time|season|points")
async.waterfall(scrapers)
