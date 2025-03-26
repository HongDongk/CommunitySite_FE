import { renderPostDetail } from "../utils/views/postView.js";
import { renderComment } from "../utils/views/commentView.js";
import {
  postdetailfetch,
  postdeletefetch,
  commentcreatefetch,
  commentfetch,
} from "../utils/datafetch.js";
import { getData } from "../utils/webstoredata.js";

export async function bindPostDetailEvents() {
  const preview = document.getElementById("preview");
  const postContainer = document.querySelector(".postDetail");
  const commentContainer = document.querySelector(".comment-container");
  const commentInput = document.querySelector(".comment-input");
  const createCommentButton = document.querySelector(".comment-submit");

  const userData = getData("user");
  preview.src = userData.profileUrl;

  // URL 파라미터에서 postId 추출
  const postId = new URLSearchParams(location.hash.split("?")[1]).get("id");

  // 데이터 로딩 및 렌더링
  const postData = await postdetailfetch(postId);
  renderPostDetail(postData, postContainer);

  const commentData = await commentfetch(postId);
  renderComment(commentData, commentContainer);

  // 삭제 모달
  const deletePostModal = document.getElementById("deletePostModal");
  const deletePostButton = document.getElementById("delete-post");
  const openPostModalButton = document.getElementById("openPostModal");
  const closeModalButtons = document.querySelectorAll(".closeModal");

  const editButton = document.getElementById("editButton");

  if (postData.userEmail === userData.email) {
    openPostModalButton.disabled = false;
    editButton.disabled = false;

    openPostModalButton.addEventListener("click", () => {
      deletePostModal.style.display = "block";
    });

    deletePostButton.addEventListener("click", () => {
      postdeletefetch(postId);
    });

    closeModalButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        deletePostModal.style.display = "none";
        document.getElementById("deleteCommentModal").style.display = "none";
      });
    });
  }

  // 댓글 등록
  createCommentButton.addEventListener("click", () => {
    if (commentInput.value.length > 0) {
      const commentData = JSON.stringify({
        userId: userData.id,
        content: commentInput.value,
      });
      commentcreatefetch(postId, commentData);
    } else {
      alert("댓글은 한 글자 이상이어야 합니다!");
    }
  });
}
