# 📝 Vanilla JS 커뮤니티 프로젝트

## 프로젝트 개요

`Vanilla JS`를 기반으로 구현한 커뮤니티 프런트엔드 프로젝트입니다. 

회원가입, 로그인, 게시글 작성 및 수정, 댓글, 좋아요, 프로필 이미지 업로드 등의 기능을 제공합니다.

---

## 🔥 FrontEnd 고도화 사항

**`Vanilla JS` 프로젝트를 `React` 프로젝트처럼 동작하도록 만든다.**

 - `SPA` 구조로 개발
 - `Vanilla JS`로 `Virtual DOM` 구현
 - 컴포넌트 단위 개발

---

## 📁 프로젝트 구조

- `pages` - 각 페이지별 UI를 정의한 폴더

- `events` - 각 페이지에 필요한 이벤트 로직들을 모아둔 폴더    

- `css` - 각 페이지별 스타일 파일이 위치한 폴더  

- `views` - 게시글 리스트, 댓글 등 재사용 가능한 UI 구성요소들을 렌더링하는 함수가 있는 폴더

- `utils` - 공통 유틸리티 함수들을 모은 폴더  

- `render.js` - Virtual DOM 형식으로 이전 상태와 비교하여 변경된 부분만 렌더링하는 엔진

- `router.js` - 해시 기반의 SPA 라우팅 처리  

- `main.js` - 앱의 진입점으로, 라우터를 초기화하고 첫 화면 렌더링

- `index.html` - 프로젝트 단일 HTML 파일(SPA 구조)

--- 
## 💻 실행 플로우

### 실행영상
https://youtu.be/23JmDJBiJTI

### 실행화면

|로그인|회원가입|
|---|---|
|![login](https://github.com/user-attachments/assets/8b77a33e-736a-4dfa-bbf3-177e4436257e)|![signup](https://github.com/user-attachments/assets/2b7633cc-7bed-4c99-89f6-3a09e6eb07dc)|

|전체 게시글|게시글 상세|게시글 생성|게시글 삭제
|---|---|---|---|
|![post-list](https://github.com/user-attachments/assets/d16e5f35-faa0-4571-b97f-91cb93f5ed3f)|![post-detail](https://github.com/user-attachments/assets/a4f6f577-1383-4496-b6ee-d3405dcce964)|![post-create](https://github.com/user-attachments/assets/ff717dbd-d31f-4f85-ae81-5b21f63f920a)|![post-delete](https://github.com/user-attachments/assets/ba2f9000-032f-4e06-b2ba-10b89aa35fa8)|


|회원정보 변경|비밀번호 변경|회원 탈퇴|
|---|---|---|
|![edit-profile](https://github.com/user-attachments/assets/0fcade9b-98fd-4d61-9d44-ae07b49150ad)|![member-withdrawal](https://github.com/user-attachments/assets/b8fc0a6c-0abd-4560-b634-9dd952b4f4d7)|![user-delete](https://github.com/user-attachments/assets/b3fdc7c8-9c81-4989-86d9-9b608e1bb829)|

---

## ✅ TODO

---

## 🌈 회고
