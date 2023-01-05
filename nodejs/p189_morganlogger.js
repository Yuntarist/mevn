const express = require('express')
const loogger = require('morgan')
const app = express()
const PORT = 3000

// --- 1번 로직
app.use(loogger('tiny'))
app.use((req,res,next)=>{ //request,respond 의 줄임말
    console.log('1 Time:',Date.now())
    next()
})
app.use((req,res,next)=>{
    console.log('2 Time:',Date.now())
    next()
})
app.listen(PORT,()=>{
    console.log(`${PORT}포트로 접속완료!!!`)
})