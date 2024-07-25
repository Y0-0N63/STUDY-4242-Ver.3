let array = [
  { name: '고구마', price: 1000 },
  { name: '감자', price: 500 },
  { name: '바나나', price: 1500 },
];

// 배열 마지막 요소 제거->제거된 요소 반환
let popped = array.pop();
console.log('popped');
console.log(popped);
console.log(array);

// 배열의 끝에 요소 추가
array.push(popped);
array.push({ name: '사과', price: 2000 });
console.log('push');
console.log(array);

// 요소 하나씩 출력하기
console.log('for in, index------------');
for (let i in array) {
  console.log(i);
}

console.log('for in, value------------');
for (let i in array) {
  console.log(array[i]);
}

console.log('for of------------');
for (let i of array) {
  console.log(i);
}

console.log('forEach------------');
array.forEach((item, index) => {
  console.log(item, index);
});

// 순서 뒤집기
var arr = [1, true, 'JavaScript', '자바스크립트'];
arr.reverse();
console.log('reverse');
console.log(arr);

// 배열 요소 제거 or 제거한 위치에 새 요소 추가
// 1부터 2개의 요소 제거-> 해당 자리에 false, C언언 추가
var removedElement = arr.splice(1, 2, false, 'C언어');
console.log('splice');
console.log(arr);
console.log(removedElement);

// 배열 요소 정렬 (유니코드 순서)
let arrayA = ['고구마', '감자', '바나나'];
arrayA.sort();
console.log('sort');
console.log(arrayA);
