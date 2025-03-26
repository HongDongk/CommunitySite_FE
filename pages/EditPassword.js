import { loadStyle } from "../utils/loadStyle.js";

export function EditPassword() {
  loadStyle("../css/editpassword.css", "editpassword-style");

  return {
    type: "div",
    props: {},
    children: [
      {
        type: "h1",
        props: { class: "title" },
        children: [
          {
            type: "a",
            props: { href: "#/postlist" },
            children: ["커뮤니티 서비스"],
          },
        ],
      },
      {
        type: "div",
        props: { class: "editPassword-container" },
        children: [
          { type: "h2", props: {}, children: ["비밀번호 수정"] },
          {
            type: "form",
            props: { id: "editPasswordForm" },
            children: [
              {
                type: "label",
                props: { class: "textInput" },
                children: ["비밀번호*"],
              },
              {
                type: "input",
                props: {
                  type: "password",
                  id: "password",
                  placeholder: "비밀번호를 입력하세요",
                  required: true,
                },
              },
              {
                type: "p",
                props: { class: "error-message", id: "error3" },
                children: [
                  "*비밀번호는 8자 이상 20자 이하 (대문자 소문자 숫자 특수문자)가 최소 1개 포함해야합니다.",
                ],
              },
              {
                type: "label",
                props: { class: "textInput" },
                children: ["비밀번호 확인*"],
              },
              {
                type: "input",
                props: {
                  type: "password",
                  id: "passwordsame",
                  placeholder: "비밀번호를 한번더 입력하세요",
                  required: true,
                },
              },
              {
                type: "p",
                props: { class: "error-message", id: "error4" },
                children: ["*비밀번호가 일치하지 않습니다."],
              },
              {
                type: "button",
                props: {
                  id: "editButton",
                  type: "submit",
                  disabled: true,
                },
                children: ["수정하기"],
              },
            ],
          },
        ],
      },
    ],
  };
}
