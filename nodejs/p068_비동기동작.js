const job1 = () =>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log('난 1번')
    },b)
}
const job2 = () =>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log('난 2번')
    },b)
}
const job3 = () =>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log('난 3번')
    },b)
}
job1()
job2()
job3()