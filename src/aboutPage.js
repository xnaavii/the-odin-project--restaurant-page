export default function aboutPage() {
  const contentDiv = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Learn more about the best pizza place";
  contentDiv.append(title);
}
