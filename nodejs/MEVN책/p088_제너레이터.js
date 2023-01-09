const log = console.log;
function* get() {
  yield 10;
  if (false) yield 20; // 건너뜀
  yield 30;
  return 90;
  yield 40;
}
// 방법1
// let iter = get();
// console.log(iter);
// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());

// 방법2
console.log(...get()); // 결과물 반환 10 30

// Object [Generator] {}
// { value: 10, done: false }
// { value: 30, done: false }
// { value: 90, done: true }
// { value: undefined, done: true }
