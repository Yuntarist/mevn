console.log('hi!')
setTimeout(function timeout(){
    console.log('async function1 complete')
},0)
setTimeout(function timeout(){
    console.log('async function2 complete')
},0)
console.log('안녕하세요')
/*
hi!
kundol!
async function1 complete (1초뒤 등장)
async function2 complet (1초뒤 등장) 
코드가 적힌 순서에 상관없이 console.log함수가 먼저 출력되는것을 볼 수 있다.
*/ 