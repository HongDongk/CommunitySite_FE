import { checkpasswordPattern } from './function/validation.js';

const editPasswordForm = document.getElementById('editPasswordForm');
const passwordInput = document.getElementById('password');
const passwordSameInput = document.getElementById('passwordsame');
const passwordError = document.getElementById('error3');
const passwordSameError = document.getElementById('error4');

let passwordCheck = false;
let passwordSameCheck = false;

function validatePassword() {
  passwordCheck = checkpasswordPattern(passwordInput.value);

  if (passwordCheck) {
    passwordError.classList.remove('error-on');
  } else {
    passwordError.classList.add('error-on');
  }

  updateSignUpButton();
}

function validatePasswordSame() {
  passwordSameCheck = passwordInput.value === passwordSameInput.value ? true : false;

  if (passwordSameCheck) {
    passwordSameError.classList.remove('error-on');
  } else {
    passwordSameError.classList.add('error-on');
  }

  updateSignUpButton();
}

passwordInput.addEventListener('input', validatePassword);
passwordSameInput.addEventListener('input', validatePasswordSame);

function updateSignUpButton() {
  if (passwordCheck && passwordSameCheck) {
    editButton.classList.add('active');
    editButton.removeAttribute('disabled');
  } else {
    editButton.classList.remove('active');
    editButton.setAttribute('disabled', 'true');
  }
}

editPasswordForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (passwordCheck && passwordSameCheck) {
    window.alert('비밀번호 수정 성공');
    window.location.replace('../postlist.html');
  }
});
