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

// 게시글 상세렌더링
export function renderPostDetail(postDetailData, container) {
  container.innerHTML = `
    <h1 class="post-title">${postDetailData.title}</h1>
    <div class="post-header">
        <div class="post-header-left">
            <div class="avatar">${postDetailData.userEmail[0]}</div>
            <div class="author">${postDetailData.userEmail}</div>
            <div class="date">${postDetailData.updatedAt.slice(0, 10)}</div>
        </div>
        <div class="buttons">
            <button id="editButton" class="edit-btn" disabled>수정</button>
            <button class="delete-btn" id="openPostModal" disabled>삭제</button>
        </div>
    </div>
    <div class="post-image">
        <img src="${postDetailData.imageUrl}" width="100%" />
    </div>

    <p class="post-content">${postDetailData.content}</p>

    <div class="post-meta">
        <div id="like">❤️ ${postDetailData.likes}</div>
        <div>조회수 ${postDetailData.views}</div>
        <div>💬 ${postDetailData.commentCount}</div>
    </div>
    <hr />
   `;
}
