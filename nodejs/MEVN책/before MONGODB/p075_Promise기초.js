const a = (c='네이버')=>{
    return new Promise((resolve, reject)=>{
        // 비동기 함수로직 비동기 작업의 처리과정에서 성공/실패를 구분하는 방법이다.
        setTimeout(()=>{
            resolve(`${c}로부터 받은 사랑`)
        },1*1000)
    })
}
a()
    .then(ret =>{
    console.log(ret)
    return a(`카카오`)
})
    .then(ret =>{
        console.log(ret)
})