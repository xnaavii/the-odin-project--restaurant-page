import heroImg from "./assets/hero-image.jpg";

export default function initialPageLoad() {
  const contentDiv = document.querySelector("#content");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  const title = document.createElement("h1");
  title.classList.add("hero-title");
  title.textContent = "Taste the best Dublin pizza";
  heroContainer.append(title);

  const img = new Image();
  img.src = heroImg;
  img.classList.add("hero-img");
  heroContainer.append(img);

  contentDiv.append(heroContainer);
}
