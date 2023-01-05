const express = require('express')
const logger = require('morgan')
const app = express()
const PORT = 3000
app.use('/',express.static('d://yhs//mevn//nodejs//p193')) // 정적 접근 폴더 지정
app.use(logger('tiny'))
// 커스텀 미들웨어 // 커스텀을 개인화 하겠다는 말임
// app.use((req,res,next)=>{
//     console.log('요청이 왔네요 지나갑니다')
//     next()
// })

app.listen(PORT,()=>{
    console.log(PORT+'로 연결되었습니다.')
})
