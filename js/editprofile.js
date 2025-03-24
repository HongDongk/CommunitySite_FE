import { getData } from "./util/webstoredata.js";
import { signOutfetch, userinfofetch } from "./util/datafetch.js";
import { checknicknamePattern, toggleError } from "./util/validation.js";

const editProfileForm = document.getElementById("editProfileForm");
const preview = document.getElementById("preview");
const nicknameInput = document.getElementById("nickname");
const nicknameError = document.getElementById("error2");
const deletePostModal = document.getElementById("deletePostModal");
const openPostModalButton = document.getElementById("openPostModal");
const closeModalButtons = document.querySelectorAll(".closeModal");
const modalRightButton = document.querySelector(".modalRightButton");

const userData = getData("user");

nicknameInput.value = userData.nickname;
preview.src = userData.profileUrl;
document.getElementById("email").textContent = userData.email;

let nicknameCheck = false;

// 게시글 삭제 모달 열기
openPostModalButton.addEventListener("click", function () {
  deletePostModal.style.display = "block";
});

modalRightButton.addEventListener("click", function () {
  userData.id && signOutfetch(userData.id);
});

// 모달 닫기 (버튼 클릭 시)
closeModalButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    deletePostModal.style.display = "none";
  });
});

function validateNickname() {
  nicknameCheck = checknicknamePattern(nicknameInput.value);
  toggleError(nicknameError, nicknameCheck);
  updateSignUpButton();
}

nicknameInput.addEventListener("input", validateNickname);

function updateSignUpButton() {
  if (nicknameCheck) {
    editProfileButton.classList.add("active");
    editProfileButton.removeAttribute("disabled");
  } else {
    editProfileButton.classList.remove("active");
    editProfileButton.setAttribute("disabled", "true");
  }
}

editProfileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (nicknameCheck) {
    userData.nickname = nicknameInput.value;
    let userInfoData = JSON.stringify({
      nickname: `${nicknameInput.value}`,
    });
    userinfofetch(userData.id, userInfoData);
  }
});
