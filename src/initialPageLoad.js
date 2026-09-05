import heroImg from "./assets/hero-image.jpg";

export default function initialPageLoad() {
  const contentDiv = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to the best restaurant in Dublin";
  contentDiv.append(h1);

  const img = new Image();
  img.src = heroImg;
  contentDiv.append(img);
}
