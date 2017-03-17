const request = require('request')
const htmlparser = require('htmlparser')

request.get({
  url: 'https://www.collegeswimming.com/swimmer/233047/times/bymeet/',
  headers: {
    Referer: 'https://www.collegeswimming.com/swimmer/233047/',
    Accept: '*/*',
    Host: 'www.collegeswimming.com',
    DNT: 1,
    'X-Requested-With': 'XMLHttpRequest'
  }
}, (err, response, body) => {
  // console.log(response.headers)
  console.log(body)
})
