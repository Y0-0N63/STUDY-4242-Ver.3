const javascriptObject = [
  { name: '윤인성', region: '서울' },
  { name: '윤명월', region: '도쿄' },
];

for (key in javascriptObject[0]) {
  console.log(key, javascriptObject[0][key]);
}

// console.log('error---------');
// for (key of javascriptObject[0]) {
//   console.log(key);
// }

// JSON 문자열로 변환
const outputA = JSON.stringify(javascriptObject);
console.log('outputA-------');
console.log(outputA);

// 객체로 변환
const outputC = JSON.parse(outputA);
console.log('outputB-------');
console.log(outputC);
