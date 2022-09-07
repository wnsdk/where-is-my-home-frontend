function regist() {
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // 입력값 검증
    if (id == "" || password == "" || name == "" || email == "" || phone == "") {
      alert("빈칸이 없도록 입력해주세요.");
      return;
    } else {
      // input data로 user 만들기
      const user = {
        id: id,
        password: password,
        name: name,
        email: email,
        phone: phone,
      };

      // user 객체 문자열로 바꿔서 로컬스토리지에 저장 //+ localStorage.length
      localStorage.setItem("user", JSON.stringify(user));
      alert("사용자 등록 성공!");
      // 로그인 화면으로 돌아가기
      location.replace("login.html");
    
  }
}