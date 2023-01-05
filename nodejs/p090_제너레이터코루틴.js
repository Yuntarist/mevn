const log = console.log;
function* map(f, list) {
  for (const a of list) {
    yield f(a);
  }
}
const add = (a) => a + 10;
const a = [1, 2, 3, 4, 5];
const cg = map(add, a);
log(cg.next());
log("딴짓하기1");
log(cg.next());
log("딴짓하기2");
log(cg.next());
log("딴짓하기3");
log(cg.next());
log("딴짓하기4");
log(cg.next());
log("딴짓하기5");
log(cg.next());
