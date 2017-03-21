const request = require('request')
const cheerio = require('cheerio')
const moment = require('moment')

sivan = 233047
brian = 210182

function scrape(id) {
  request.get({
    url: 'https://www.collegeswimming.com/swimmer/' + id + '/times/bymeet/',
    headers: {
      Referer: 'https://www.collegeswimming.com/swimmer/' + id,
      Accept: '*/*',
      Host: 'www.collegeswimming.com',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }, (err, response, body) => {

    var $ = cheerio.load(body, { ignoreWhitespace: true })
    var meets = $("table.c-table-clean tbody tr")

    for(var i = 0; i < meets.length; i++) {
      // what event is it? (we might not even use this, but is helpful)
      const event = meets[i].children[1].children[0].data

      // process date into a season
      const date = meets[i].children[3].children[0].data
      const month = moment(date, "MMM DD, YYYY").month()
      const year = moment(date, "MMM DD, YYYY").year() + (month > 8 ? 1 : 0)

      // read time
      try {
        var time = meets[i].children[7].children[1].children[0].data
      } catch (e) {
        // user inputted time
        time = "NA"
      }
      if(time == "(R)") { // formatting is different for relay lead offs
        time = meets[i].children[7].children[3].children[0].data
      }

      console.log(event + "|" + date + "|" + time + "|" + (year - 1) + "-" + year)
    }
  })
}

scrape(sivan)
