import { loadStyle } from "../utils/loadStyle.js";

export function EditProfile() {
  loadStyle("../css/editprofile.css", "editprofile-style");

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
              { type: "h2", props: {}, children: ["회원탈퇴 하시겠습니까?"] },
              {
                type: "p",
                props: {},
                children: ["작성된 게시글과 댓글은 삭제됩니다."],
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
        type: "h1",
        props: { class: "title" },
        children: [
          {
            type: "a",
            props: { href: "#/postlist" },
            children: ["힐링 커뮤니티"],
          },
        ],
      },
      {
        type: "div",
        props: { class: "signup-container" },
        children: [
          { type: "h2", props: {}, children: ["회원정보수정"] },
          {
            type: "form",
            props: { id: "editProfileForm" },
            children: [
              {
                type: "div",
                props: { class: "textInput" },
                children: ["프로필 사진*"],
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
                children: [
                  { type: "img", props: { id: "preview" }, children: [] },
                ],
              },
              {
                type: "label",
                props: { class: "textInput" },
                children: ["이메일"],
              },
              { type: "div", props: { id: "email" }, children: [] },
              {
                type: "label",
                props: { class: "textInput" },
                children: ["닉네임*"],
              },
              {
                type: "input",
                props: { type: "text", id: "nickname", required: true },
              },
              {
                type: "p",
                props: { class: "error-message", id: "error2" },
                children: ["*닉네임은 10자 이내, 띄어쓰기 불가입니다"],
              },
              {
                type: "button",
                props: {
                  id: "editProfileButton",
                  type: "submit",
                  disabled: true,
                },
                children: ["수정하기"],
              },
            ],
          },
          {
            type: "div",
            props: { class: "delete-btn", id: "openPostModal" },
            children: ["회원탈퇴"],
          },
        ],
      },
    ],
  };
}
