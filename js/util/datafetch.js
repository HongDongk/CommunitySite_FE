import { storeData, removeData } from "./webstoredata.js";
import { backUrl } from "../../config/config.js";

// 로그인 패치
export async function loginfetch(loginData) {
  try {
    const response = await fetch(`${backUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginData,
    });

    const result = await response.json();
    storeData("user", result);
    window.location.replace("../postlist.html");
  } catch (err) {
    console.log(err);
    window.alert("로그인 실패");
  }
}

// 로그아웃 패치
export async function logoutfetch() {
  try {
    const response = await fetch(`${backUrl}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    removeData("user");
    window.location.replace("../login.html");
  } catch (err) {
    console.log(err);
    window.alert("로그아웃 실패");
  }
}
