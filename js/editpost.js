const editpostForm = document.getElementById('editpostForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const imageInput = document.getElementById('imageInput');
const editButton = document.getElementById('editPostButton');
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

titleInput.value = '자전거를 탄 풍경';
contentInput.value =
  '자전거를 타는 귀요미자전거를 타는 귀요미자전거를 타는 귀요미자전거를 타는 귀요미자전거를 타는 귀요미자전거를 타는 귀요미자전거를 타는 귀요미';

let titleCheck = false;
let contentCheck = false;

// 생성버튼 활성화로직
function validEditButton() {
  titleCheck = titleInput.value.length > 0 && titleInput.value.length < 27;
  contentCheck = contentInput.value.length > 0;

  if (titleCheck && contentCheck) {
    editButton.classList.add('active');
    editButton.removeAttribute('disabled');
  } else {
    editButton.classList.remove('active');
    editButton.setAttribute('disabled', 'true');
  }
}

titleInput.addEventListener('input', validEditButton);
contentInput.addEventListener('input', validEditButton);
imageInput.addEventListener('change', validEditButton);

editpostForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (titleCheck && contentCheck) {
    window.alert('게시물 수정 성공');
    window.location.replace('../postlist.html');
  }
});
