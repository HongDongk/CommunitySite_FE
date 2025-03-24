const editProfileForm = document.getElementById('editProfileForm');
const imageInput = document.getElementById('imageInput');
const nicknameInput = document.getElementById('nickname');
const imageLabel = document.getElementById('imageLabel');
const imageError = document.getElementById('error1');
const nicknameError = document.getElementById('error2');
const deletePostModal = document.getElementById('deletePostModal');
const openPostModalButton = document.getElementById('openPostModal');
const closeModalButtons = document.querySelectorAll('.closeModal');
const modalRightButton = document.querySelector('.modalRightButton');

let imageCheck = false;
let nicknameCheck = false;

nicknameInput.value = 'shai';

// 게시글 삭제 모달 열기
openPostModalButton.addEventListener('click', function () {
  deletePostModal.style.display = 'block';
});

modalRightButton.addEventListener('click', function () {
  window.location.replace('../login.html');
});

// 모달 닫기 (버튼 클릭 시)
closeModalButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', function () {
    deletePostModal.style.display = 'none';
  });
});

function validateImage(event) {
  imageCheck = event.target.files[0];
  if (imageCheck) {
    imageError.classList.remove('error-on');
    const reader = new FileReader();

    reader.onload = function (e) {
      imageLabel.style.backgroundImage = `url(${e.target.result})`;
      imageLabel.classList.add('has-image');
    };

    reader.readAsDataURL(imageCheck);
  } else {
    imageError.classList.add('error-on');
  }

  updateSignUpButton();
}

function validateNickname() {
  const nicknamePattern = /^[^\s]{1,10}$/;
  nicknameCheck = nicknamePattern.test(nicknameInput.value);

  if (nicknameCheck) {
    nicknameError.classList.remove('error-on');
  } else {
    nicknameError.classList.add('error-on');
  }

  updateSignUpButton();
}

imageInput.addEventListener('change', validateImage);
nicknameInput.addEventListener('input', validateNickname);

function updateSignUpButton() {
  if (imageCheck && nicknameCheck) {
    editProfileButton.classList.add('active');
    editProfileButton.removeAttribute('disabled');
  } else {
    editProfileButton.classList.remove('active');
    editProfileButton.setAttribute('disabled', 'true');
  }
}

editProfileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (imageCheck && nicknameCheck) {
    window.alert('회원정보 수정 성공');
  }
});
