const dotenv = require('dotenv')
dotenv.config()

const out = process.env.key
console.log(out)

// 본인 api 키 가리는 법

// 환경변수
// 작업창이 켜져있는 동안 유지
// cmd : set 변수 = 값
// ps : $env:변수 = 값
// 리눅스 : export 변수 = 값

// 노드는 좀 다름. 확인하고 사용할것.
// node : node process.env.변수 = 값
// .env파일내) 변수 = 값. 그리고 .gitignore에 꼭 등록할 것
// 보안성 유지를 위해 언제나 해야할 중요한 길목임
