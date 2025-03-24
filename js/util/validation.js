// 이메일 검증 함수
export function checkemailPattern(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailPattern.test(email);
}

// 비밀번호 검증 함수
export function checkpasswordPattern(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
  return passwordPattern.test(password);
}

// 닉네임 검증 함수
export function checknicknamePattern(nickname) {
  const nicknamePattern = /^[^\s]{1,10}$/;
  return nicknamePattern.test(nickname);
}

// 유효성 검증 UI변경 함수
export function toggleError(element, isValid) {
  if (!isValid) {
    element.classList.add("error-on");
  } else {
    element.classList.remove("error-on");
  }
}
