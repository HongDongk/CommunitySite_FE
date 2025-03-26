import { getData } from "../utils/webstoredata.js";
import { signOutfetch, userinfofetch } from "../utils/datafetch.js";
import { checknicknamePattern, toggleError } from "../utils/validation.js";

export function bindEditProfileEvents() {
  const userData = getData("user");

  const editProfileForm = document.getElementById("editProfileForm");
  const preview = document.getElementById("preview");
  const nicknameInput = document.getElementById("nickname");
  const nicknameError = document.getElementById("error2");
  const editProfileButton = document.getElementById("editProfileButton");
  const emailDisplay = document.getElementById("email");

  const deletePostModal = document.getElementById("deletePostModal");
  const openPostModalButton = document.getElementById("openPostModal");
  const closeModalButtons = document.querySelectorAll(".closeModal");
  const modalRightButton = document.querySelector(".modalRightButton");

  nicknameInput.value = userData.nickname;
  preview.src = userData.profileUrl;
  emailDisplay.textContent = userData.email;

  let nicknameCheck = false;

  openPostModalButton.addEventListener("click", () => {
    deletePostModal.style.display = "block";
  });

  modalRightButton.addEventListener("click", () => {
    userData.id && signOutfetch(userData.id);
  });

  closeModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      deletePostModal.style.display = "none";
    });
  });

  function validateNickname() {
    nicknameCheck = checknicknamePattern(nicknameInput.value);
    toggleError(nicknameError, nicknameCheck);
    updateButtonState();
  }

  function updateButtonState() {
    if (nicknameCheck) {
      editProfileButton.classList.add("active");
      editProfileButton.removeAttribute("disabled");
    } else {
      editProfileButton.classList.remove("active");
      editProfileButton.setAttribute("disabled", "true");
    }
  }

  nicknameInput.addEventListener("input", validateNickname);

  editProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nicknameCheck) {
      const userInfoData = JSON.stringify({ nickname: nicknameInput.value });
      userinfofetch(userData.id, userInfoData);
    }
  });
}
