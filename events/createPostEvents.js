import { getData } from "../utils/webstoredata.js";
import { postcreatefetch, imagefetch } from "../utils/datafetch.js";

export function bindCreatePostEvents() {
  const postForm = document.getElementById("postForm");
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const imageInput = document.getElementById("imageInput");
  const createButton = document.getElementById("createPostButton");
  const preview = document.getElementById("preview");

  const userData = getData("user");
  preview.src = userData.profileUrl;

  let imageCheck = false;
  let titleCheck = false;
  let contentCheck = false;

  function validateImage(event) {
    imageCheck = event.target.files[0];
    validCreateButton();
  }

  function validCreateButton() {
    titleCheck = titleInput.value.length > 0 && titleInput.value.length < 27;
    contentCheck = contentInput.value.length > 0;

    if (titleCheck && contentCheck && imageCheck) {
      createButton.classList.add("active");
      createButton.removeAttribute("disabled");
    } else {
      createButton.classList.remove("active");
      createButton.setAttribute("disabled", "true");
    }
  }

  titleInput.addEventListener("input", validCreateButton);
  contentInput.addEventListener("input", validCreateButton);
  imageInput.addEventListener("change", validateImage);

  postForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (titleCheck && contentCheck && imageCheck) {
      const imgFile = imageInput.files[0];
      const postImgUrl = await imagefetch(imgFile);
      const postData = JSON.stringify({
        title: titleInput.value,
        content: contentInput.value,
        imageUrl: postImgUrl,
        userId: userData.id,
      });
      postcreatefetch(postData);
    }
  });
}
