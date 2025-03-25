import { storeData, removeData } from "./webstoredata.js";
import { backUrl } from "../../config/config.js";

// 이미지 업로드
export async function imagefetch(imgfile) {
  const formData = new FormData();
  formData.append("image", imgfile);
  try {
    const response = await fetch(`${backUrl}/image/upload`, {
      method: "POST",
      body: formData,
    });
    const imageUrl = await response.text();
    return `${backUrl}${imageUrl}`;
  } catch (err) {
    console.error("업로드 실패:", err);
  }
}

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

// 회원가입 패치
export async function signUpfetch(signupData) {
  try {
    const response = await fetch(`${backUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: signupData,
    });
    window.location.replace("../login.html");
  } catch (err) {
    console.log(err);
    window.alert("회원가입 실패");
  }
}

// 회원탈퇴 패치
export async function signOutfetch(userId) {
  try {
    const response = await fetch(`${backUrl}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    removeData("user");
    window.location.replace("../login.html");
  } catch (err) {
    console.log(err);
    window.alert("회원탈퇴 실패");
  }
}

// 회원정보변경 패치
export async function userinfofetch(userId, nickname) {
  try {
    const response = await fetch(`${backUrl}/userinfo/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: nickname,
    });
    removeData("user");
    window.location.replace("../login.html");
  } catch (err) {
    console.log(err);
    window.alert("회원정보변경 실패");
  }
}

// 비밀번호변경 패치
export async function passwordfetch(userId, password) {
  try {
    const response = await fetch(`${backUrl}/users/password/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: password,
    });
    removeData("user");
    window.location.replace("../login.html");
  } catch (err) {
    console.log(err);
    window.alert("비밀번호변경 실패");
  }
}

////////////////// 포스트 /////////////////////////

// 전체포스트 불러오기패치
export async function postfetch() {
  try {
    const response = await fetch(`${backUrl}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
