import { loadStyle } from "../utils/loadStyle.js";

export function PostDetail() {
  loadStyle("/css/postdetail.css", "postdetail-style");

  return {
    type: "div",
    props: {},
    children: [
      {
        type: "div",
        props: { id: "deletePostModal", class: "modal" },
        children: [
          {
            type: "div",
            props: { class: "modal-content" },
            children: [
              {
                type: "h2",
                props: {},
                children: ["게시글을 삭제하시겠습니까?"],
              },
              {
                type: "p",
                props: {},
                children: ["삭제한 내용은 복구 할 수 없습니다."],
              },
              {
                type: "div",
                props: { class: "modalButtonBox" },
                children: [
                  {
                    type: "button",
                    props: { class: "modalLeftButton closeModal" },
                    children: ["취소"],
                  },
                  {
                    type: "button",
                    props: {
                      id: "delete-post",
                      class: "modalRightButton closeModal",
                    },
                    children: ["확인"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "div",
        props: { id: "deleteCommentModal", class: "modal" },
        children: [
          {
            type: "div",
            props: { class: "modal-content" },
            children: [
              { type: "h2", props: {}, children: ["댓글을 삭제하시겠습니까?"] },
              {
                type: "p",
                props: {},
                children: ["삭제한 내용은 복구 할 수 없습니다."],
              },
              {
                type: "div",
                props: { class: "modalButtonBox" },
                children: [
                  {
                    type: "button",
                    props: { class: "modalLeftButton closeModal" },
                    children: ["취소"],
                  },
                  {
                    type: "button",
                    props: { class: "modalRightButton closeModal" },
                    children: ["확인"],
                  },
                ],
              },
            ],
          },
        ],
      },
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
            props: { class: "title" },
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
        props: { class: "post-container" },
        children: [
          { type: "div", props: { class: "postDetail" }, children: [] },
          {
            type: "div",
            props: { class: "comment-section" },
            children: [
              {
                type: "input",
                props: {
                  type: "text",
                  class: "comment-input",
                  placeholder: "댓글을 남겨주세요",
                },
              },
              {
                type: "button",
                props: { class: "comment-submit" },
                children: ["등록"],
              },
            ],
          },
          {
            type: "div",
            props: { class: "comment-container" },
            children: [
              { type: "div", props: { class: "comment" }, children: [] },
            ],
          },
        ],
      },
    ],
  };
}
