const numbers = [1,3,5,4]
const isAllOdd = numbers.every(e=>e%2)
const isSomeOdd = numbers.some(e=>e%2)
console.log(isAllOdd,isSomeOdd) // false, true
// some은 하나의 조건만 만족하면 true
// every는 모든 조건을 만족해야 true