import "./styles.css";
import initialPageLoad from "./initialPageLoad.js";
import menuPage from "./menuPage.js";
import aboutPage from "./aboutPage.js";

const navBtn = document.querySelectorAll(".nav-btn");

navBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearContent();
    changeActivePage(e.target.dataset.page);
  });
});

function changeActivePage(pageName) {
  const pages = { home: initialPageLoad, menu: menuPage, about: aboutPage };
  if (!pageName || !pages[pageName]) return;
  pages[pageName]();
}

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

initialPageLoad();
