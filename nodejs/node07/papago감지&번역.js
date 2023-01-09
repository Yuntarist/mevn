require('dotenv').config() // env를 사용하기 때문에 꼭 넣어줘야함.
var express = require('express')
var app = express()

var client_id = process.env.nid // 번역
var client_secret = process.env.npw
var client_id2 = process.env.nid2 // 감지
var client_secret2 = process.env.npw2

var query = '시간이 빨리 지나가요.'

app.get('/translate', function (req, res) {
  // 번역
  var api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  var request = require('request')
  var options = {
    url: api_url,
    form: { source: 'ko', target: 'en', text: query },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  }
})
app.get('/translate', function (req, res) {
  // 감지
  var api_url = 'https://openapi.naver.com/v1/papago/detectLangs'
  var request = require('request')
  var options = {
    url: api_url,
    form: { query: query },
    headers: {
      'X-Naver-Client-Id': client_id2,
      'X-Naver-Client-Secret': client_secret2
    }
  }
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' })
      res.end(body)
    } else {
      res.status(response.statusCode).end()
      console.log('error = ' + response.statusCode)
    }
  })
})
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/translate app listening on port 3000!')
})
