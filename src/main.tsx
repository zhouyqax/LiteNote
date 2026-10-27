import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 移动端（Android / iOS）检测：给根节点打上 ln-mobile 标记，
// 由 src/styles/mobile.css 接管「全屏不透明 + 字号放大 + 安全区」。
// 桌面端（Windows / macOS / Linux）UA 不含这些关键字，样式与行为完全不变。
if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  document.documentElement.classList.add("ln-mobile");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
