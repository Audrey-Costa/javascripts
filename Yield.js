function* g4() {
  yield* [1, 2, 3];
  return 'foo';
}

var result = "boo";

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(result);