import { storeData } from "./webstoredata.js";

// 로그인 패치
export async function loginfetch(loginData) {
  try {
    const response = await fetch("http://localhost:8080/login", {
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
