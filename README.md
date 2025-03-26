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

- `pages`  
  각 페이지별 UI를 정의한 폴더

- `events`  
  각 페이지에 필요한 이벤트 로직들을 모아둔 폴더
  (버튼 클릭, 폼 제출, 유효성 검사 등 사용자 상호작용 처리 담당)

- `css`  
  페이지별 스타일 파일이 위치한 폴더
  (`loadStyle()`을 통해 페이지 진입 시 동적으로 로드)

- `views`  
  게시글 리스트, 댓글 등 재사용 가능한 UI 구성요소들을 렌더링하는 함수가 있는 폴더

- `utils`  
  공통 유틸리티 함수들을 모은 폴더  
  (API 통신(fetch), 정규표현식 검증, 로컬스토리지 핸들링, 설정값 관리 등을 포함)

- `render.js`  
  `Virtual DOM`을 실제 `DOM`으로 변환하고, 이전 상태와 비교하여 변경된 부분만 렌더링하는 핵심 엔진

- `router.js`  
  해시 기반의 SPA 라우팅 처리
  (URL 변경 시 해당 컴포넌트를 렌더링하고 이벤트를 바인딩)

- `main.js`  
  앱의 진입점으로, 라우터를 초기화하고 첫 화면을 렌더링

- `index.html`  
  단일 HTML 파일로, 모든 화면은 이 파일에서 렌더링 됌 (SPA 구조)


---

## ✅ TODO

---

## 🌈 회고
