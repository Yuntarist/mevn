
공식문서 내용을 참고 해서 이해해 본다면
var require = function(src){ //line 1
var fileAsStr = readFile(src) //line 2
var module.exports = {} //line 3
eval(fileAsStr) //line 4
return module.exports
} //line 5

결국 위 내용은
const b = { a : 10 }
와 같음.

console.log(b.a)
b에서 exports에 들어간 <key,value>들이 require()함수의 아웃풋으로 나오는 것
exports와 module.exports는 같은 대상을 지칭하고 있는 서로 다른 두 명칭