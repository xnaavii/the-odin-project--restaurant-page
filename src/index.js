import "./styles.css";
import initialPageLoad from "./initialPageLoad.js";
import menuPage from "./menuPage.js";

const pages = { home: initialPageLoad, menu: menuPage };
const navBtn = document.querySelectorAll(".nav-btn");

navBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const pageName = e.target.dataset.page;
    if (!pageName || !pages[pageName]) return;
    clearContent();
    pages[pageName]();
  });
});

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

initialPageLoad();
