// 내이름으로 바꿀것
// 본인 포트폴리오로 가공하면서 할것
const express=require('express')
const path=require('path')
const app=express()
const PORT=3000
const _path=path.join(__dirname,'./dist')
app.use(express.static(_path))
app.listen(PORT,()=>console.log(`포트폴리오 서버가 시작됩니다.${PORT}!`)) 