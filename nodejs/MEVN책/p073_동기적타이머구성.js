const job1 = () => {
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(1)
        job2()},b)
    }
const job2 = () => {
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(2)
        job3()},b)
    }
const job3 = () => {
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(3)},b)
    }
job1()
// 123순차적으로 실행하기 위해서 1과 2에 함수호출을 추가하였다.
