let record_arr = [
  { name: 'kim', kor: 100, math: 60, eng: 80 },
  { name: 'lee', kor: 80, math: 55, eng: 85 },
  { name: 'park', kor: 90, math: 65, eng: 88 },
  { name: 'mike', kor: 60, math: 75, eng: 81 },
  { name: 'sam', kor: 90, math: 85, eng: 84 },
];

record_arr.forEach(function (student) {
  if (student.math < 80) {
    student.math += 3;
  }
});

console.log('성적 산출', record_arr);
