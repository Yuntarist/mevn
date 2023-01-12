const axios = require('axios')
const cheerio = require('cheerio')

const url = 'http://www.cgv.co.kr/movies/?lt=1&ft=0'

axios.get(url).then((res) => {
  let rank = [],
    moviename = []

  let $ = cheerio.load(res.data)
  $('.rank').each(function () {
    rank.push($(this).text())
  })
  $('.title').each(function () {
    moviename.push($(this).text())
  })

  for (i = 0; i < 5; i++) console.log(`${rank[i]}(${moviename[i]})`)
  //   console.log(`${rank}(${moviename})`)
})
