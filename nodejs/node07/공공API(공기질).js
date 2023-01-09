require('dotenv').config()

const request = require('request')

let key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=10&resultType=json'
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
  console.log(
    `${_.site}의 일산화탄소: ${_.co} 오존: ${_.o3} 초미세먼지:  ${_.pm25} 미세먼지: ${_.pm10}`
  )
})
