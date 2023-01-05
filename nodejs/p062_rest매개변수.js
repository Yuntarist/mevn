// 나머지 매개변수
const a = (b,...rest) => {
    console.log(rest)
}
a(1,2,3) // [ 2, 3 ]

const b = [1,2,3]
const a2 = (a,b,c) => console.log(a,b,c)
a2(...b) // 1 2 3

const a3 = [1,2,3,4,5]
const [head,...rest] = a3
console.log(head,rest) // 1 [ 2, 3, 4, 5 ]

// 배열통합
const aa = [1,2,3]
const bb = [4,5,6]
const cc = [...aa,...bb]
console.log(cc) // [ 1, 2, 3, 4, 5, 6 ]

// max 함수 사용
const ma = [1,2,3,4]
console.log(Math.max(...ma)) // 4

// 객체 복사
const oa = {"name":"주홍철","age":27}
const ob = {...oa,"key":1}
console.log(ob) // {name :'주홍철',age:27,key:1}


