import MENU from "./menu.js";

export default function menuPage() {
  const div = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Explore the best menu";

  div.append(h1);
  div.append(menuList(MENU));
}

function menuList(menu) {
  const list = document.createElement("ul");

  menu.forEach((item) => {
    list.append(menuItem(item));
  });

  return list;
}

function menuItem(menuItem) {
  const item = document.createElement("li");
  item.textContent = menuItem.name;

  const img = new Image();
  img.src = menuItem.image;
  item.append(img);

  return item;
}
