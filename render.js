let prevVNode = null;

export function render(vNode, container) {
  if (!prevVNode) {
    container.innerHTML = "";
    container.appendChild(createElement(vNode));
  } else {
    patch(container.firstChild, prevVNode, vNode);
  }
  prevVNode = vNode; // 이전 가상돔 저장
}

function createElement(vNode) {
  const el = document.createElement(vNode.type);

  // props(스타일 요소추가)
  if (vNode.props) {
    for (const [key, value] of Object.entries(vNode.props)) {
      el.setAttribute(key, value);
    }
  }

  // children
  if (vNode.children) {
    vNode.children.forEach((child) => {
      const childEl =
        typeof child === "string"
          ? document.createTextNode(child)
          : createElement(child);
      el.appendChild(childEl);
    });
  }

  return el;
}

// Diff 알고리즘
function patch(dom, oldVNode, newVNode) {
  console.log("돔 비교 시작:", { oldVNode, newVNode });
  // 1. type이 다르면 통째로 교체
  if (oldVNode.type !== newVNode.type) {
    console.log("완전히 새롭게 생성");
    const newEl = createElement(newVNode);
    dom.replaceWith(newEl);
    return;
  }

  // 2. props 업데이트
  for (const [key, value] of Object.entries(newVNode.props || {})) {
    if (oldVNode.props?.[key] !== value) {
      dom.setAttribute(key, value);
    }
  }

  for (const key in oldVNode.props || {}) {
    if (!(key in (newVNode.props || {}))) {
      dom.removeAttribute(key);
    }
  }

  // 3. children 비교 (문자열만 비교)
  const oldChildren = oldVNode.children || [];
  const newChildren = newVNode.children || [];

  for (let i = 0; i < newChildren.length; i++) {
    const oldChild = oldChildren[i];
    const newChild = newChildren[i];

    if (!oldChild) {
      const newEl =
        typeof newChild === "string"
          ? document.createTextNode(newChild)
          : createElement(newChild);
      dom.appendChild(newEl);
      continue;
    }

    if (typeof newChild === "string" && typeof oldChild === "string") {
      if (newChild !== oldChild) {
        dom.childNodes[i].textContent = newChild;
      }
    } else {
      patch(dom.childNodes[i], oldChild, newChild);
    }
  }

  // 4. 기존에 있었던 노드가 사라졌다면 제거
  while (dom.childNodes.length > newChildren.length) {
    dom.removeChild(dom.lastChild);
  }
}
