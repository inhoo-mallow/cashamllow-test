// 커스텀 도메인 사용으로 BASE_PATH 제거
const BASE_PATH = "/cashamllow-test/";

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

  if (
    path === BASE_PATH ||
    path === BASE_PATH + "index.html" ||
    path === BASE_PATH.slice(0, -1) // /cashamllow-test (슬래시 없는 버전)
  ) {
    showPage("home");
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
      e.preventDefault();
      const path = e.target.getAttribute("href");
      history.pushState(null, "", path);
      handleRoute();
    }
  });
});
