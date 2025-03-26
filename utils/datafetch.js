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

// 로그인
export async function loginfetch(loginData) {
  try {
    const response = await fetch(`${backUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: loginData,
    });
    const result = await response.json();
    storeData("user", result);
    location.hash = "#/postlist"; // ✅ SPA 라우팅
  } catch (err) {
    console.log(err);
    alert("로그인 실패");
  }
}

// 로그아웃
export async function logoutfetch() {
  try {
    await fetch(`${backUrl}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    removeData("user");
    location.hash = "#/login";
  } catch (err) {
    console.log(err);
    alert("로그아웃 실패");
  }
}

// 회원가입
export async function signUpfetch(signupData) {
  try {
    await fetch(`${backUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: signupData,
    });
    location.hash = "#/login";
  } catch (err) {
    console.log(err);
    alert("회원가입 실패");
  }
}

// 회원탈퇴
export async function signOutfetch(userId) {
  try {
    await fetch(`${backUrl}/users/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    removeData("user");
    location.hash = "#/login";
  } catch (err) {
    console.log(err);
    alert("회원탈퇴 실패");
  }
}

// 회원정보 변경
export async function userinfofetch(userId, nickname) {
  try {
    await fetch(`${backUrl}/userinfo/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: nickname,
    });
    removeData("user");
    location.hash = "#/login";
  } catch (err) {
    console.log(err);
    alert("회원정보 변경 실패");
  }
}

// 비밀번호 변경
export async function passwordfetch(userId, password) {
  try {
    await fetch(`${backUrl}/users/password/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: password,
    });
    removeData("user");
    location.hash = "#/login";
  } catch (err) {
    console.log(err);
    alert("비밀번호 변경 실패");
  }
}

////////////////// 포스트 /////////////////////////

export async function postfetch() {
  try {
    const response = await fetch(`${backUrl}/posts`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function postcreatefetch(postData) {
  try {
    await fetch(`${backUrl}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: postData,
    });
    location.hash = "#/postlist";
  } catch (err) {
    console.log(err);
    alert("게시글 생성 실패");
  }
}

export async function postdetailfetch(postId) {
  try {
    const response = await fetch(`${backUrl}/posts/${postId}`);
    return await response.json();
  } catch (err) {
    console.log(err);
    alert("게시글 불러오기 실패");
  }
}

export async function postdeletefetch(postId) {
  try {
    await fetch(`${backUrl}/posts/${postId}`, {
      method: "DELETE",
    });
    location.hash = "#/postlist";
  } catch (err) {
    console.log(err);
    alert("게시글 삭제 실패");
  }
}

////////////////// 댓글 /////////////////////////

export async function commentcreatefetch(postId, commentData) {
  try {
    await fetch(`${backUrl}/${postId}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: commentData,
    });
    alert("댓글 생성이 완료되었습니다!");
    location.reload(); // ✴️ 여긴 선택: SPA면 댓글 UI만 갱신해도 됨
  } catch (err) {
    console.log(err);
    alert("댓글 생성 실패");
  }
}

export async function commentfetch(postId) {
  try {
    const response = await fetch(`${backUrl}/${postId}/comments`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
