import { loadStyle } from "../utils/loadStyle.js";

export function CreatePost() {
  loadStyle("../css/createpost.css", "createpost-style");

  return {
    type: "div",
    props: {},
    children: [
      {
        type: "header",
        props: { class: "header" },
        children: [
          {
            type: "a",
            props: { href: "#/postlist" },
            children: [
              {
                type: "img",
                props: { id: "prevBtn", src: "./img/left-arrow.png" },
                children: [],
              },
            ],
          },
          {
            type: "h1",
            children: ["힐링 커뮤니티"],
          },
          {
            type: "div",
            props: { class: "dropdown-button" },
            children: [{ type: "img", props: { id: "preview" }, children: [] }],
          },
          {
            type: "ul",
            props: { class: "dropdown-menu" },
            children: [
              {
                type: "li",
                props: { class: "dropdown-item" },
                children: [
                  {
                    type: "a",
                    props: { href: "#/editprofile" },
                    children: ["회원정보 수정"],
                  },
                ],
              },
              {
                type: "li",
                props: { class: "dropdown-item" },
                children: [
                  {
                    type: "a",
                    props: { href: "#/editpassword" },
                    children: ["비밀번호 수정"],
                  },
                ],
              },
              {
                type: "li",
                props: { id: "logout", class: "dropdown-item" },
                children: [
                  {
                    type: "a",
                    props: { href: "#/login" },
                    children: ["로그아웃"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "div",
        props: { class: "write-container" },
        children: [
          { type: "h1", props: {}, children: ["🌱 게시글 작성"] },
          {
            type: "form",
            props: { id: "postForm" },
            children: [
              { type: "label", props: { for: "title" }, children: ["제목*"] },
              {
                type: "input",
                props: {
                  type: "text",
                  id: "title",
                  name: "title",
                  placeholder: "제목을 입력해주세요(최대 26자)",
                  required: true,
                },
              },
              { type: "label", props: { for: "content" }, children: ["내용*"] },
              {
                type: "textarea",
                props: {
                  id: "content",
                  name: "content",
                  rows: "20",
                  placeholder: "내용을 입력해주세요",
                  required: true,
                },
              },
              { type: "label", props: {}, children: ["이미지*"] },
              {
                type: "input",
                props: {
                  type: "file",
                  id: "imageInput",
                  name: "image",
                  accept: "image/*",
                },
              },
              {
                type: "button",
                props: {
                  id: "createPostButton",
                  type: "submit",
                  disabled: true,
                },
                children: ["완료"],
              },
            ],
          },
        ],
      },
    ],
  };
}
