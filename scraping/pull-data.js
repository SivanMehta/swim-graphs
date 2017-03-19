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
      DNT: 1,
      'X-Requested-With': 'XMLHttpRequest'
    }
  }, (err, response, body) => {

    var $ = cheerio.load(body, { ignoreWhitespace: true })
    var meets = $("table.c-table-clean caption")

    for(i = 0; i < meets.length; i ++) {
      console.log(meets[i].children[0].data)
    }
  })
}

scrape(sivan)
