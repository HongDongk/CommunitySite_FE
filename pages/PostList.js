import { loadStyle } from "../utils/loadStyle.js";

export function PostList() {
  loadStyle("/css/postList.css", "postlist-style");

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
            props: { href: "#/login" },
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
            children: ["커뮤니티 서비스"],
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
                children: ["로그아웃"],
              },
            ],
          },
        ],
      },
      {
        type: "div",
        props: { class: "board-container" },
        children: [
          {
            type: "div",
            props: { class: "board-header" },
            children: [
              { type: "h1", props: {}, children: ["📢 카테부 게시판"] },
              {
                type: "a",
                props: { href: "#/createpost" },
                children: [
                  {
                    type: "button",
                    props: { class: "write-btn" },
                    children: ["게시글 작성"],
                  },
                ],
              },
            ],
          },
          { type: "div", props: { class: "post-list" }, children: [] },
        ],
      },
    ],
  };
}
