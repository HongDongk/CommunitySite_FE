const deletePostModal = document.getElementById('deletePostModal');
const deleteCommentModal = document.getElementById('deleteCommentModal');
const openPostModalButton = document.getElementById('openPostModal');
const openCommentModalButton = document.getElementById('openCommentModal');
const closeModalButtons = document.querySelectorAll('.closeModal');
const likeButton = document.getElementById('like');
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

let like = 12;
let isLike = false;

document.getElementById('like').innerText = `🤍 ${like}`;

likeButton.addEventListener('click', function () {
  if (!isLike) {
    isLike = true;
    like++;
    document.getElementById('like').innerText = `❤️ ${like}`;
  } else {
    isLike = false;
    like--;
    document.getElementById('like').innerText = `🤍 ${like}`;
  }
});

// 게시글 삭제 모달 열기
openPostModalButton.addEventListener('click', function () {
  deletePostModal.style.display = 'block';
});

// 댓글삭제 모달열기
openCommentModalButton.addEventListener('click', function () {
  deleteCommentModal.style.display = 'block';
});

// 모달 닫기 (버튼 클릭 시)
closeModalButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', function () {
    deletePostModal.style.display = 'none';
    deleteCommentModal.style.display = 'none';
  });
});
