const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

let open = false;

// 드롭다운 열기/닫기
dropdownButton.addEventListener('click', function () {
  if (!open) {
    dropdownMenu.classList.add('show');
    open = true;
  } else {
    dropdownMenu.classList.remove('show');
    open = false;
  }
});
