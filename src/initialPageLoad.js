import heroImg from "./assets/hero-image.jpg";

export default function initialPageLoad() {
  const contentDiv = document.querySelector("#content");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  const title = document.createElement("h1");
  title.classList.add("hero-title");
  title.textContent = "Welcome to the best restaurant in Dublin";
  heroContainer.append(title);

  const img = new Image();
  img.src = heroImg;
  heroContainer.append(img);

  contentDiv.append(heroContainer);
}
