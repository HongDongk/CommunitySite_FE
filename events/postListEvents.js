import { getData } from "../utils/webstoredata.js";
import { postfetch } from "../utils/datafetch.js";
import { renderPostList } from "../utils/views/postView.js";
import { logoutfetch } from "../utils/datafetch.js";

export async function bindPostListEvents() {
  const preview = document.getElementById("preview");
  const container = document.querySelector(".post-list");
  const logoutBtn = document.getElementById("logout");

  const userData = getData("user");
  if (userData) {
    preview.src = userData.profileUrl;
  }

  const postData = await postfetch();
  renderPostList(postData, container);

  // 드롭다운 및 로그아웃 이벤트
  const dropdownBtn = document.querySelector(".dropdown-button");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownBtn?.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  logoutBtn?.addEventListener("click", () => {
    logoutfetch();
  });
}
