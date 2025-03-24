import {
  checkemailPattern,
  checkpasswordPattern,
  toggleError,
} from "./util/validation.js";
import { loginfetch } from "./util/datafetch.js";

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const emailError = document.getElementById("error1");
const passwordError = document.getElementById("error2");

let emailCheck = false;
let passwordCheck = false;

function validateEmail() {
  emailCheck = checkemailPattern(emailInput.value);
  toggleError(emailError, emailCheck);
  updateLoginButton();
}

function validatePassword() {
  passwordCheck = checkpasswordPattern(passwordInput.value);
  toggleError(passwordError, passwordCheck);
  updateLoginButton();
}

// 로그인버튼 활성화버튼
function updateLoginButton() {
  if (emailCheck && passwordCheck) {
    loginButton.classList.add("active");
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.classList.remove("active");
    loginButton.setAttribute("disabled", "true");
  }
}

emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (emailCheck && passwordCheck) {
    let loginData = JSON.stringify({
      email: `${emailInput.value}`,
      password: `${passwordInput.value}`,
    });
    loginfetch(loginData);
  }
});
