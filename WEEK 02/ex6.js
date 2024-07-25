// fetch 통해 API 사용 -> 원격 서버에서 데이터 가져오기
// ㄴ> 비동기적으로 HTTP GET 요청 전송->Promise 반환->요청 완료->응답 처리 (비동기적으로 응답 처리)
// Promise->비동기 작업을 처리하기 위한 객체, 비동기 작업이 완료되었을 때 결과 값 반환 또는 처리 계속할 수 있도록

// URL로 GET 요청 보내 Promise반환(Promse, 서버에서 응답 받을 때까지 대기)
// Promise 요청 완료된 후 응답 객체(response) 전달
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
  // 응답 본문 JSON으로 파싱 -> json에서 또다른 Promise 반환
  // Promise, JSON 파싱 완료되면 파싱된 데이터 전달(data로) -> then 호출
  response.json().then((data) => {
    console.log('call fetch -1');
    console.log('data', data);
  })
);
