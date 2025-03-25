import { getData } from "./util/webstoredata.js";
import { postfetch } from "./util/datafetch.js";
import { renderPostList } from "./views/postView.js";

const preview = document.getElementById("preview");
const container = document.querySelector(".post-list");

const postData = await postfetch();
const userData = getData("user");
preview.src = userData.profileUrl;

function initiallize() {
  renderPostList(postData, container);
}

initiallize();
