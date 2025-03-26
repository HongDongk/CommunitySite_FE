export function createElement(vnode) {
  if (typeof vnode === 'string') return document.createTextNode(vnode);
  const el = document.createElement(vnode.type);
  for (const [key, value] of Object.entries(vnode.props || {})) {
    el.setAttribute(key, value);
  }
  (vnode.children || []).forEach(child => {
    el.appendChild(createElement(child));
  });
  return el;
}

export function render(vnode, container) {
  container.innerHTML = '';
  container.appendChild(createElement(vnode));
}