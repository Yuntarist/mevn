const request = require('request')

const url = 0
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  console.log(rst.body)
  // const _ =
})
