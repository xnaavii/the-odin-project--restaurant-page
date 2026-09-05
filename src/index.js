import "./styles.css";
import initialPageLoad from "./initialPageLoad.js";
import menuPage from "./menuPage.js";
import aboutPage from "./aboutPage.js";

(() => {
  const pages = { home: initialPageLoad, menu: menuPage, about: aboutPage };
  const navBtn = document.querySelectorAll(".nav-btn");
  let activePage = "home";

  navBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      clearContent();
      changeActivePage(e.target.dataset.page);
      updateActiveTab();
    });
  });

  function changeActivePage(pageName) {
    if (!pageName || !pages[pageName]) {
      return;
    }
    activePage = pageName;
    pages[pageName]();
  }

  function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
  }

  function updateActiveTab() {
    navBtn.forEach((btn) => {
      if (btn.dataset.page === activePage) {
        btn.dataset.active = true;
      } else {
        btn.dataset.active = false;
      }
    });
  }

  initialPageLoad();
  updateActiveTab();
})();
