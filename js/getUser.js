window.onload = function () {
  const xhr = new XMLHttpRequest();
  // 요청 method
  const method = "GET";
  // 파일 위치
  const url = "data/user.json";

  console.log(url.length);

  // 위의 method 와 url 로 비동기 요청 초기화
  xhr.open(method, url, true);
  console.log(xhr);
  // 요청 헤더 설정
  xhr.setRequestHeader("Content-Type", "application/text");
  // 요청 동작 설정
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === xhr.DONE) {
      // 요청 상태가 OK 이면
      if (xhr.status === 200) {
        console.log(xhr.status);
        // Json 객체 형태로 응답 받기
        const resJson = JSON.parse(xhr.responseText);
        const userData = resJson.users;
        // 자동차 data 삽입할 html 요소 찾기
        console.log(userData.length);

        let userList = document.querySelector(".content-user-list-ul");
        for (let i = 0; i < userData.length; i++) {
          const user = {
            id: userData[i]["id"],
            password: userData[i]["password"],
            name: userData[i]["name"],
            email: userData[i]["email"],
            phone: userData[i]["phone"],
          };

          console.log(userData[i]["id"]);

          // user 객체 문자열로 바꿔서 로컬스토리지에 저장
          localStorage.setItem("user" + i, JSON.stringify(user));
        }
      }
    }
  };
}