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
  list.classList.add("menu-list");

  menu.forEach((item) => {
    list.append(menuItem(item));
  });

  return list;
}

function menuItem(menuItem) {
  const item = document.createElement("li");
  item.classList.add("menu-item");

  const headerContent = document.createElement("div");

  const name = document.createElement("p");
  name.textContent = menuItem.name;

  const price = document.createElement("p");
  price.textContent = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(menuItem.price);

  headerContent.append(name);
  headerContent.append(price);
  item.append(headerContent);

  const img = new Image();
  img.src = menuItem.image;
  item.append(img);

  return item;
}
