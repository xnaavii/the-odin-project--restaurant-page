import heroImg from "./assets/hero-image.jpg";

export default function initialPageLoad() {
  const contentDiv = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Welcome to the best restaurant in Dublin";
  contentDiv.append(title);

  const img = new Image();
  img.src = heroImg;
  contentDiv.append(img);
}
