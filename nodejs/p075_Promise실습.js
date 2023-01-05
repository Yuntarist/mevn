const a = ( c = '나가자')=>{
    return new Promise((resolve, reject)=>{
        resolve(`${c}`)
    })
}
a().then(ret =>{
    console.log(ret)
    return a('싸우자')
}).then(ret=>{
    console.log(ret)
    return a('이기자')
}).then(ret=>{
    console.log(ret)
})
// Promise 안에 비동기함수 a를 집어넣고 비동기 함수가 끝났을때 값을
// return하고 싶은값을 resolve함수인 a안에 넣어둔다.
// 그리고 넘기면 끝
// setTimeout은 적용하지않았음.