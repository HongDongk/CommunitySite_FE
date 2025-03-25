// 게시글 전체렌더링
export function renderPostList(postData, container) {
  container.innerHTML = "";

  postData.forEach((post) => {
    const postLink = document.createElement("a");
    postLink.href = `./postdetail.html?id=${post.id}`;

    postLink.innerHTML = `
      <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <div class="post-meta">
          ❤️ ${post.likes} &nbsp;&nbsp; 💬 ${
      post.commentCount
    } &nbsp;&nbsp; 조회수 ${post.views}
          <span class="post-date">${post.updatedAt.slice(0, 10)}</span>
        </div>
        <p class="post-author">작성자: ${post.userEmail}</p>
      </div>
    `;

    container.appendChild(postLink);
  });
}
