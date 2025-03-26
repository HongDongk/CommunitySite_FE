import { loadStyle } from "../utils/loadStyle.js";

export function Signup() {
  loadStyle("../css/signup.css", "signup-style");

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
            props: { href: "#/login" },
            children: ["커뮤니티 서비스"],
          },
        ],
      },
      {
        type: "div",
        props: { class: "signup-container" },
        children: [
          { type: "h2", props: {}, children: ["회원가입"] },
          {
            type: "form",
            props: { id: "signupForm" },
            children: [
              {
                type: "label",
                props: { class: "textInput" },
                children: ["프로필*"],
              },
              {
                type: "p",
                props: { class: "error-message", id: "error1" },
                children: ["*프로필을 등록해주세요"],
              },
              {
                type: "label",
                props: {
                  for: "imageInput",
                  class: "upload-circle",
                  id: "imageLabel",
                },
                children: [" + "],
              },
              {
                type: "input",
                props: {
                  type: "file",
                  id: "imageInput",
                  accept: "image/*",
                  hidden: true,
                },
              },

              {
                type: "label",
                props: { class: "textInput" },
                children: ["이메일*"],
              },
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
                props: { class: "error-message", id: "error2" },
                children: ["*올바른 이메일 형식을 입력해주세요"],
              },

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
                type: "label",
                props: { class: "textInput" },
                children: ["닉네임*"],
              },
              {
                type: "input",
                props: {
                  type: "text",
                  id: "nickname",
                  placeholder: "닉네임을 입력하세요",
                  required: true,
                },
              },
              {
                type: "p",
                props: { class: "error-message", id: "error5" },
                children: ["*닉네임은 10자 이내, 띄어쓰기 불가입니다"],
              },

              {
                type: "button",
                props: { id: "signupButton", type: "submit", disabled: true },
                children: ["회원가입"],
              },
            ],
          },
          {
            type: "div",
            props: { class: "login" },
            children: [
              {
                type: "a",
                props: { href: "#/login" },
                children: ["로그인 하러가기"],
              },
            ],
          },
        ],
      },
    ],
  };
}
