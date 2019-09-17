//Server test

es.apitest()

var abc = 2 + 2;
console.log("server/server.js: The value of abc is " + abc); // 4

function test(a, b, c) {
  abc += a
  console.log("abc += a: " + abc)
  abc += b
  console.log("abc += b: " + abc)
  abc += c
  console.log("abc += c: " + abc)
}
