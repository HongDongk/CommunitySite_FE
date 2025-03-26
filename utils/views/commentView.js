// 댓글 렌더링
export function renderComment(comments, container) {
  container.innerHTML = "";
  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    commentElement.innerHTML = `
        <div class="comment">
            <div class="comment-header">
            <div class="comment-header-left">
                <div class="avatar">${comment.userEmail[0]}</div>
                <div class="author">${comment.userEmail}</div>
                <div class="date">${comment.updatedAt.slice(0, 10)}</div>
            </div>
            <div class="buttons">
                <button class="edit-btn" disabled>수정</button>
                <button disabled class="delete-btn" data-comment-id="${
                  comment.commentId
                }">삭제</button>
            </div>
            </div>
            <p class="comment-content">${comment.content}</p>
        </div>
      `;

    container.appendChild(commentElement);
  });
}
