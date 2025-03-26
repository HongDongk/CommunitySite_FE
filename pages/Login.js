import { loadStyle } from "../utils/loadStyle.js";

export function Login() {
  loadStyle("../css/login.css", "login-style");

  return {
    type: "div",
    props: {},
    children: [
      {
        type: "h1",
        props: { class: "title" },
        children: [
          {
            type: "p",
            children: ["커뮤니티 서비스"],
          },
        ],
      },
      {
        type: "div",
        props: { class: "login-container" },
        children: [
          {
            type: "h2",
            props: {},
            children: ["로그인"],
          },
          {
            type: "form",
            props: { id: "loginForm" },
            children: [
              {
                type: "input",
                props: {
                  type: "email",
                  id: "email",
                  placeholder: "이메일을 입력하세요",
                  required: true,
                },
              },
              {
                type: "p",
                props: { class: "error-message", id: "error1" },
                children: ["*올바른 이메일 형식을 입력해주세요"],
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
                props: { class: "error-message", id: "error2" },
                children: [
                  "*비밀번호는 8자 이상 20자 이하 (대문자 소문자 숫자 특수문자)가 최소 1개 포함해야합니다.",
                ],
              },
              {
                type: "button",
                props: {
                  type: "submit",
                  id: "loginButton",
                  disabled: true,
                },
                children: ["로그인"],
              },
            ],
          },
          {
            type: "div",
            props: { class: "signup" },
            children: [
              {
                type: "a",
                props: { href: "#/signup" },
                children: ["회원가입"],
              },
            ],
          },
        ],
      },
    ],
  };
}
