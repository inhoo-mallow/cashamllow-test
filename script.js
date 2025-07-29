// 커스텀 도메인 사용으로 BASE_PATH 제거
const BASE_PATH = "/";

function showPage(pageId) {
  console.log("pageid!!", pageId);
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");

  if (pageId === "home") {
    history.pushState(null, "", BASE_PATH);
  }
}

function handleRoute() {
  const path = window.location.pathname;
  console.log("path!!", path);
  console.log("BASE_PATH!!", BASE_PATH);
  console.log("path === BASE_PATH:", path === BASE_PATH);

  if (path === BASE_PATH || path === BASE_PATH + "index.html" || path === "") {
    showPage("home");
  } else if (path.startsWith("/app")) {
    // /app 경로는 실제 파일로 리다이렉트
    window.location.href = path;
    return;
  } else {
    showPage("404");
  }
}

window.addEventListener("popstate", handleRoute);
window.addEventListener("load", handleRoute);


window.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    if (
      e.target.tagName === "A" &&
      e.target.getAttribute("href").startsWith("/")
    ) {
      const href = e.target.getAttribute("href");
      
      // /app/* 경로는 실제 파일로 이동 (기본 링크 동작 허용)
      if (href.startsWith("/app")) {
        return;
      }
      
      e.preventDefault();
      const path = href;
      history.pushState(null, "", path);
      handleRoute();
    }
  });
});
