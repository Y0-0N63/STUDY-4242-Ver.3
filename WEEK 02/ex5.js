// 콜백 = 함수의 인자(매개변수)로 전달되어 그 함수에 의해 호출되는 함수
// ㄴ 특정 작업 수행 위한 코드 일부분을 다른 함수에 전달
// callTenTimes -> 반복 작업 수행
// callback -> 실제 작업 수행 (익명함수가 callback 매개변수로 전달)
function callTenTimes(callback) {
  for (let i = 0; i < 10; i++) {
    callback();
  }
}

callTenTimes(function () {
  console.log('함수 호출');
});
