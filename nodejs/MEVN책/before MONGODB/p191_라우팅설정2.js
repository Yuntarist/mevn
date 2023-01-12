const express = require('express')
const app = express()
const loogger = require('morgan');
const PORT = 3001 // 원래 포트는 보안상 아주 중요한것이므로 바꿔서 작성해야한다.
app.use(loogger('tiny')) // 로거 위에있는 내용들을 간편하게 작성하는 코드이다.
const simple_module = require('./p192_컨트롤러설정하기2.js')
app.get('/',simple_module.intro)
// app.get('/users/:userName/books/:bookName',simple_module.handleBook)
app.get('/users',simple_module.handleBook)
app.listen(PORT,()=>{
    console.log(PORT + '로 접속되었습니다.')
})