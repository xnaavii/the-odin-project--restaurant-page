export default function aboutPage() {
  const contentDiv = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Learn more about THE pizza place!";

  const details = document.createElement("p");
  details.textContent =
    "In order to know more you gotta try it, so order one now! 🍕";

  contentDiv.append(title);
  contentDiv.append(details);
}
