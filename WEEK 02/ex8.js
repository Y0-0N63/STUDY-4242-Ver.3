let record_arr = [
  { name: 'kim', kor: 100, math: 60, eng: 80 },
  { name: 'lee', kor: 80, math: 55, eng: 85 },
  { name: 'park', kor: 90, math: 65, eng: 88 },
  { name: 'mike', kor: 60, math: 75, eng: 81 },
  { name: 'sam', kor: 90, math: 85, eng: 84 },
  { name: 'choi', kor: 90, math: 85, eng: 84 },
];

// 합계, 평균
record_arr.forEach(function (student) {
  student.total = student.kor + student.math + student.eng;
  student.average = student.total / 3;
});

// 석차 계산 (내림차순 정렬)
record_arr.sort(function (a, b) {
  return b.total - a.total;
});

// 배열에 석차 추가(순위 수정)
record_arr.forEach(function (student, index) {
  student.rank = index + 1;
});

// 동점자 처리 (누적값/현재값)
let ranked_arr = record_arr.reduce((acc, student, index) => {
  // 현재 학생 점수 = 이전 학생 점수 -> 동점자
  if (index > 0 && student.total === acc[index - 1].total) {
    // 등수를 동일하게 설정
    student.rank = acc[index - 1].rank;
  } else {
    student.rank = index + 1;
  }
  // 수정된 등수 반영하기
  acc.push(student);
  return acc;
}, []);

console.log('성적 산출', record_arr);
