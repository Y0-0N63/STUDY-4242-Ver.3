let record_arr = [
  { name: 'kim', kor: 100, math: 60, eng: 80 },
  { name: 'lee', kor: 80, math: 55, eng: 85 },
  { name: 'park', kor: 90, math: 65, eng: 88 },
  { name: 'mike', kor: 60, math: 75, eng: 81 },
  { name: 'sam', kor: 90, math: 85, eng: 84 },
];

let record_arr2 = [];

for (let key in record_arr[0]) {
  if (key != 'name') {
    record_arr2.push({ subjectname: key });
  }
}

record_arr.forEach((item, index) => {
  for (let subject_obj of record_arr2) {
    let key = item.name;
    let value = item[subject_obj.subjectname];
    subject_obj[key] = value;
  }
});

console.log(record_arr2);
