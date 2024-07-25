var arr = ['zero', 'one', 'two'];
var arr2 = new Array();

arr2.push('zero');
arr2.push('one');
arr2.push('two');

// 객체의 반복 (객체의 열거 가능한 속성 반복)
for (let i in arr) {
  console.log(arr[i]);
}

// of : 배열의 반복 (반복 가능한 객체(iterable object)의 값 반복)
// Uncaught TypeError: obj is not iterable
for (let i of arr) {
  console.log(i);
}

// 각 요소에 대해 제공된 함수 실행
arr.forEach((item, index) => {
  console.log(item, index);
});
