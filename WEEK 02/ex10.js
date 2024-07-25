let record_arr = [
  { name: 'kim', kor: 100, math: 60, eng: 80 },
  { name: 'lee', kor: 80, math: 55, eng: 85 },
  { name: 'park', kor: 90, math: 65, eng: 88 },
  { name: 'mike', kor: 60, math: 75, eng: 81 },
  { name: 'sam', kor: 90, math: 85, eng: 84 },
];

// ------------------------------------------------------------

// 과목 이름을 담는 배열 생성
const subjects = ['kor', 'math', 'eng'];

// ------------------------------------------------------------

// 각 과목별로 새로운 객체 생성
// subjectname 속성에 현재 과목명 저장
// map -> 배열 각 요소를 순회하며 변환하여 새로운 배열 생성
// 원본 배열 변경 X, 변환된 결과로 새로운 배열 반환
let record_arr2 = subjects.map((subject) => {
  // 현재 과목명 포함하는 새로운 객체 생성
  // subject 속성에 현재 과목명 저장
  // -> map()함수의 콜백에서 매개변수 받아온 값->subjectname의 프로퍼티 값으로 저장
  let record = { subjectname: subject };
  record_arr.forEach((student) => {
    // 동적 프로퍼티 추가
    // 학생 객체의 현재 과목에 해당하는 성적을 record 객체에 추가
    // student.name -> key, subject -> value
    record[student.name] = student[subject];
  });

  // subjectname과 학생 성적을 포함하여 완성된 record 객체 반환
  return record;
});

console.log(record_arr2);
