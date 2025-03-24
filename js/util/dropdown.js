import { logoutfetch } from "./datafetch.js";

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const logoutButton = document.getElementById("logout");

let open = false;

// 드롭다운 열기/닫기
dropdownButton.addEventListener("click", function () {
  if (!open) {
    dropdownMenu.classList.add("show");
    open = true;
  } else {
    dropdownMenu.classList.remove("show");
    open = false;
  }
});

// 로그아웃
logoutButton.addEventListener("click", function () {
  logoutfetch();
});
