const request = require('request')
const util = require('util')

const cheerio = require('cheerio')

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
      const event = meets[i].children[1].children[0].data
      const date = meets[i].children[3].children[0].data
      try {
        var time = meets[i].children[7].children[1].children[0].data
      } catch (e) {
        // user inputted time
        time = "NA"
      }
      if(time == "(R)") { // formatting is different for relay lead offs
        time = meets[i].children[7].children[3].children[0].data
      }

      console.log(event + "|" + date + "|" + time)
    }
  })
}

scrape(sivan)
