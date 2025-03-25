import { renderPostDetail } from "./views/postView.js";
import { postdetailfetch, postdeletefetch } from "./util/datafetch.js";
import { getData } from "./util/webstoredata.js";

const preview = document.getElementById("preview");
const deleteCommentModal = document.getElementById("deleteCommentModal");
// const openCommentModalButton = document.getElementById("openCommentModal");
const closeModalButtons = document.querySelectorAll(".closeModal");
// const likeButton = document.getElementById("like");

// let like = 12;
// let isLike = false;

// document.getElementById("like").innerText = `🤍 ${like}`;
const container = document.querySelector(".postDetail");
let postId = new URLSearchParams(window.location.search).get("id");
const userData = getData("user");
preview.src = userData.profileUrl;

async function initiallize() {
  let postData = await postdetailfetch(postId);
  renderPostDetail(postData, container);
  const openPostModalButton = document.getElementById("openPostModal");
  const deletePostModal = document.getElementById("deletePostModal");
  const closeModalButtons = document.querySelectorAll(".closeModal");
  const deletePostButton = document.getElementById("delete-post");
  const editButton = document.getElementById("editButton");

  if (postData.userEmail === userData.email) {
    openPostModalButton.disabled = false;
    editButton.disabled = false;
    openPostModalButton.addEventListener("click", function () {
      deletePostModal.style.display = "block";
    });

    deletePostButton.addEventListener("click", function () {
      postdeletefetch(postId);
    });

    // 모달 닫기 (버튼 클릭 시)
    closeModalButtons.forEach((closeButton) => {
      closeButton.addEventListener("click", function () {
        deletePostModal.style.display = "none";
        deleteCommentModal.style.display = "none";
      });
    });
  }
}

initiallize();

// likeButton.addEventListener("click", function () {
//   if (!isLike) {
//     isLike = true;
//     like++;
//     document.getElementById("like").innerText = `❤️ ${like}`;
//   } else {
//     isLike = false;
//     like--;
//     document.getElementById("like").innerText = `🤍 ${like}`;
//   }
// });

// 댓글삭제 모달열기
// openCommentModalButton.addEventListener("click", function () {
//   deleteCommentModal.style.display = "block";
// });
