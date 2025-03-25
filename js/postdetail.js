import { renderPostDetail } from "./views/postView.js";
import { renderComment } from "./views/commentView.js";
import {
  postdetailfetch,
  postdeletefetch,
  commentcreatefetch,
  commentfetch,
} from "./util/datafetch.js";
import { getData } from "./util/webstoredata.js";

const preview = document.getElementById("preview");
const deleteCommentModal = document.getElementById("deleteCommentModal");

const postcontainer = document.querySelector(".postDetail");
const commentcontainer = document.querySelector(".comment-container");
let postId = new URLSearchParams(window.location.search).get("id");
const userData = getData("user");
preview.src = userData.profileUrl;

async function initiallize() {
  let postData = await postdetailfetch(postId);
  renderPostDetail(postData, postcontainer);

  let commentData = await commentfetch(postId);
  renderComment(commentData, commentcontainer);

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

const commentInput = document.querySelector(".comment-input");
const createCommentButton = document.querySelector(".comment-submit");

createCommentButton.addEventListener("click", function () {
  if (commentInput.value.length > 0) {
    let commentData = JSON.stringify({
      userId: `${userData.id}`,
      content: `${commentInput.value}`,
    });
    commentcreatefetch(postId, commentData);
  } else {
    window.alert("댓글은 한글자 이상이어야합니다!");
  }
});
