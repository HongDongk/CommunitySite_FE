import {
  checkemailPattern,
  checkpasswordPattern,
  checknicknamePattern,
  toggleError,
} from "../utils/validation.js";

import { signUpfetch, imagefetch } from "../utils/datafetch.js";

export function bindSignupEvents() {
  const signupForm = document.getElementById("signupForm");
  const imageInput = document.getElementById("imageInput");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const passwordSameInput = document.getElementById("passwordsame");
  const nicknameInput = document.getElementById("nickname");
  const signupButton = document.getElementById("signupButton");

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

  function updateSignupButton() {
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

  imageInput.addEventListener("change", (event) => {
    imageCheck = event.target.files[0];
    if (imageCheck) {
      imageError.classList.remove("error-on");
      const reader = new FileReader();
      reader.onload = (e) => {
        imageLabel.style.backgroundImage = `url(${e.target.result})`;
        imageLabel.classList.add("has-image");
      };
      reader.readAsDataURL(imageCheck);
    } else {
      imageError.classList.add("error-on");
    }
    updateSignupButton();
  });

  emailInput.addEventListener("input", () => {
    emailCheck = checkemailPattern(emailInput.value);
    toggleError(emailError, emailCheck);
    updateSignupButton();
  });

  passwordInput.addEventListener("input", () => {
    passwordCheck = checkpasswordPattern(passwordInput.value);
    toggleError(passwordError, passwordCheck);
    updateSignupButton();
  });

  passwordSameInput.addEventListener("input", () => {
    passwordSameCheck = passwordInput.value === passwordSameInput.value;
    toggleError(passwordSameError, passwordSameCheck);
    updateSignupButton();
  });

  nicknameInput.addEventListener("input", () => {
    nicknameCheck = checknicknamePattern(nicknameInput.value);
    toggleError(nicknameError, nicknameCheck);
    updateSignupButton();
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (
      imageCheck &&
      emailCheck &&
      passwordCheck &&
      passwordSameCheck &&
      nicknameCheck
    ) {
      const imgFile = imageInput.files[0];
      const profileImgUrl = await imagefetch(imgFile);

      const signupData = JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
        nickname: nicknameInput.value,
        profileUrl: profileImgUrl,
      });

      signUpfetch(signupData);
    }
  });
}
