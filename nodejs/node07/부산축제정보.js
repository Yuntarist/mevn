require('dotenv').config()

const request = require('request')

let key = process.env.fkey

const url =
  'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?ServiceKey=' +
  key +
  '&pageNo=1&numOfRows=4&resultType=json'
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst
  console.log(_)
})
