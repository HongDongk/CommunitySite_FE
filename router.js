import { render } from "./render.js";
import { Login } from "./pages/Login.js";
import { Signup } from "./pages/Signup.js";
import { PostList } from "./pages/PostList.js";
import { CreatePost } from "./pages/CreatePost.js";
import { EditProfile } from "./pages/EditProfile.js";
import { EditPassword } from "./pages/EditPassword.js";
import { PostDetail } from "./pages/PostDetail.js";

import { bindLoginEvents } from "./events/loginEvents.js";
import { bindSignupEvents } from "./events/signupEvents.js";
import { bindPostListEvents } from "./events/postListEvents.js";
import { bindCreatePostEvents } from "./events/createPostevents.js";
import { bindEditProfileEvents } from "./events/editProfileEvents.js";
import { bindEditPasswordEvents } from "./events/editPasswordEvents.js";
import { bindPostDetailEvents } from "./events/postDetailEvents.js";

const routes = {
  "/": Login,
  "/login": Login,
  "/signup": Signup,
  "/postlist": PostList,
  "/createpost": CreatePost,
  "/editprofile": EditProfile,
  "/editpassword": EditPassword,
  "/postdetail": PostDetail,
};

export function handleRoute() {
  const hash = location.hash.slice(1); // "#/postdetail?id=6" → "/postdetail?id=6"
  const [path, query] = hash.split("?"); // path = "/postdetail", query = "id=6"
  const view = routes[path] || NotFound;

  render(view(), document.getElementById("app"));

  // 이벤트 바인딩
  if (path === "/login") bindLoginEvents();
  else if (path === "/signup") bindSignupEvents();
  else if (path === "/postlist") bindPostListEvents();
  else if (path === "/createpost") bindCreatePostEvents();
  else if (path === "/editprofile") bindEditProfileEvents();
  else if (path === "/editpassword") bindEditPasswordEvents();
  else if (path === "/postdetail") bindPostDetailEvents();
}

function NotFound() {
  return {
    type: "div",
    props: {},
    children: ["404 - Page Not Found"],
  };
}

export function initRouter() {
  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("DOMContentLoaded", handleRoute);
}
