let mp = new Map();
mp.set("사과", "딸기"); // 키와 값이 쌍으로 들어간다.
mp.set("포도", "배");
console.log(mp.get("사과"));
console.log(mp.get("딸기"));
console.log(mp);
for (const a of mp) console.log(a);
console.log(Symbol.iterator in mp);
