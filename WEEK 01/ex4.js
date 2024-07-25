let num = 5;

function plusNum(value, plusnum = 20) {
  let num = (value += 10);
  console.log('함수 호출 결과 값은 ' + num + '입니다.');
}

// 2000밀리초=2초 후 plusNum 함수 호출, value 매개변수로 10 전달
// 일정 시간 지난 후 코드 한 번 실행
setTimeout(plusNum, 2000, 10);

// 2초마다 plusNum 함수 호출
// 일정 간격으로 코드 반복적으로 실행
let timer = setInterval(plusNum, 2000, 30);

// 6초 후 실행, clearInterval
setTimeout(() => {
  // setInterval로 설정된 반복 실행 중지
  clearInterval(timer);
  console.log('타이머 종료');
}, 7000);
