//Server test

ES.V1.Apitest()

ES.V1.EventListen("event", "test")
ES.V1.EventTrigger("event", 1, 2, 3)

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
