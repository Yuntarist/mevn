const http = require('http')
const PORT = 12010
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    res.end('안녕하세요 MEVN프로젝트입니다.') // 완전 기본적인 내용이라 잘 쓰질 않는다.
})

server.listen(PORT,()=>{
    console.log(`${PORT}의 포트에서 서버가 가동됨`) // 서버 가동시 한글 띄어쓰기를 인식하질 못하니 사용하지말것.
})