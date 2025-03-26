import { getData } from "../utils/webstoredata.js";
import { checkpasswordPattern, toggleError } from "../utils/validation.js";
import { passwordfetch } from "../utils/datafetch.js";

export function bindEditPasswordEvents() {
  const editPasswordForm = document.getElementById("editPasswordForm");
  const passwordInput = document.getElementById("password");
  const passwordSameInput = document.getElementById("passwordsame");
  const passwordError = document.getElementById("error3");
  const passwordSameError = document.getElementById("error4");
  const editButton = document.getElementById("editButton");

  const userData = getData("user");

  let passwordCheck = false;
  let passwordSameCheck = false;

  function validatePassword() {
    passwordCheck = checkpasswordPattern(passwordInput.value);
    toggleError(passwordError, passwordCheck);
    updateButtonState();
  }

  function validatePasswordSame() {
    passwordSameCheck = passwordInput.value === passwordSameInput.value;
    toggleError(passwordSameError, passwordSameCheck);
    updateButtonState();
  }

  function updateButtonState() {
    if (passwordCheck && passwordSameCheck) {
      editButton.classList.add("active");
      editButton.removeAttribute("disabled");
    } else {
      editButton.classList.remove("active");
      editButton.setAttribute("disabled", "true");
    }
  }

  passwordInput.addEventListener("input", validatePassword);
  passwordSameInput.addEventListener("input", validatePasswordSame);

  editPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwordCheck && passwordSameCheck) {
      const passwordData = JSON.stringify({
        password: passwordInput.value,
      });
      passwordfetch(userData.id, passwordData);
    }
  });
}
