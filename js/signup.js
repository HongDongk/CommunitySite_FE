import {
  checkemailPattern,
  checkpasswordPattern,
  checknicknamePattern,
} from "./util/validation.js";

const signupForm = document.getElementById("signupForm");
const imageInput = document.getElementById("imageInput");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordSameInput = document.getElementById("passwordsame");
const nicknameInput = document.getElementById("nickname");
const imageLabel = document.getElementById("imageLabel");
const imageError = document.getElementById("error1");
const emailError = document.getElementById("error2");
const passwordError = document.getElementById("error3");
const passwordSameError = document.getElementById("error4");
const nicknameError = document.getElementById("error5");

let imageCheck = false;
let emailCheck = false;
let passwordCheck = false;
let passwordSameCheck = false;
let nicknameCheck = false;

function validateImage(event) {
  imageCheck = event.target.files[0];
  if (imageCheck) {
    imageError.classList.remove("error-on");
    const reader = new FileReader();

    reader.onload = function (e) {
      imageLabel.style.backgroundImage = `url(${e.target.result})`;
      imageLabel.classList.add("has-image");
    };

    reader.readAsDataURL(imageCheck);
  } else {
    imageError.classList.add("error-on");
  }

  updateSignUpButton();
}

function validateEmail() {
  emailCheck = checkemailPattern(emailInput.value);

  if (emailCheck) {
    emailError.classList.remove("error-on");
  } else {
    emailError.classList.add("error-on");
  }

  updateSignUpButton();
}

function validatePassword() {
  passwordCheck = checkpasswordPattern(passwordInput.value);

  if (passwordCheck) {
    passwordError.classList.remove("error-on");
  } else {
    passwordError.classList.add("error-on");
  }

  updateSignUpButton();
}

function validatePasswordSame() {
  console.log(passwordSameInput.value, passwordInput.value);
  passwordSameCheck =
    passwordInput.value === passwordSameInput.value ? true : false;

  if (passwordSameCheck) {
    passwordSameError.classList.remove("error-on");
  } else {
    passwordSameError.classList.add("error-on");
  }

  updateSignUpButton();
}

function validateNickname() {
  nicknameCheck = checknicknamePattern(nicknameInput.value);

  if (nicknameCheck) {
    nicknameError.classList.remove("error-on");
  } else {
    nicknameError.classList.add("error-on");
  }

  updateSignUpButton();
}

imageInput.addEventListener("change", validateImage);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
passwordSameInput.addEventListener("input", validatePasswordSame);
nicknameInput.addEventListener("input", validateNickname);

function updateSignUpButton() {
  if (
    imageCheck &&
    emailCheck &&
    passwordCheck &&
    passwordSameCheck &&
    nicknameCheck
  ) {
    signupButton.classList.add("active");
    signupButton.removeAttribute("disabled");
  } else {
    signupButton.classList.remove("active");
    signupButton.setAttribute("disabled", "true");
  }
}

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    imageCheck &&
    emailCheck &&
    passwordCheck &&
    passwordSameCheck &&
    nicknameCheck
  ) {
    window.alert("회원가입 성공");
    window.location.replace("../login.html");
  }
});
