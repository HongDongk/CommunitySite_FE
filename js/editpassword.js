import { getData } from "./util/webstoredata.js";
import { checkpasswordPattern, toggleError } from "./util/validation.js";
import { passwordfetch } from "./util/datafetch.js";

const editPasswordForm = document.getElementById("editPasswordForm");
const passwordInput = document.getElementById("password");
const passwordSameInput = document.getElementById("passwordsame");
const passwordError = document.getElementById("error3");
const passwordSameError = document.getElementById("error4");

const userData = getData("user");

let passwordCheck = false;
let passwordSameCheck = false;

function validatePassword() {
  passwordCheck = checkpasswordPattern(passwordInput.value);
  toggleError(passwordError, passwordCheck);
  updateSignUpButton();
}

function validatePasswordSame() {
  passwordSameCheck =
    passwordInput.value === passwordSameInput.value ? true : false;
  toggleError(passwordSameError, passwordSameCheck);
  updateSignUpButton();
}

passwordInput.addEventListener("input", validatePassword);
passwordSameInput.addEventListener("input", validatePasswordSame);

function updateSignUpButton() {
  if (passwordCheck && passwordSameCheck) {
    editButton.classList.add("active");
    editButton.removeAttribute("disabled");
  } else {
    editButton.classList.remove("active");
    editButton.setAttribute("disabled", "true");
  }
}

editPasswordForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (passwordCheck && passwordSameCheck) {
    let passwordData = JSON.stringify({
      password: `${passwordInput.value}`,
    });
    passwordfetch(userData.id, passwordData);
  }
});
