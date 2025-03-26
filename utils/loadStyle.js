// 페이지별 스타일 로드

export function loadStyle(href, id) {
  // 기존 스타일 전부 제거
  const existingLinks = document.querySelectorAll("link[data-spa-style]");
  existingLinks.forEach((link) => link.remove());

  // 새 스타일 추가
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.setAttribute("data-spa-style", "true");

  if (id) link.id = id;

  document.head.appendChild(link);
}
