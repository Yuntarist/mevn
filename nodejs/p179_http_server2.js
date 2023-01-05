const http = require('http')
const PORT = 12010
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    const obj = {"이름":"홍길동"} 
    res.end(JSON.stringify(obj))
})

server.listen(PORT,()=>{
    console.log(`${PORT}의 포트에서 서버가 가동됨`) // 서버 가동시 한글 띄어쓰기를 인식하질 못하니 사용하지말것.
})