export default function menuPage() {
  const contentDiv = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Explore the best menu";
  contentDiv.append(title);
  contentDiv.append(menuList("Starters", [{ title: "Pizza" }]));
}

function menuList(title, menuItems) {
  const menuListContainer = document.createElement("div");

  const menuListTitle = document.createElement("h4");
  menuListTitle.textContent = title;

  const menuList = document.createElement("ul");
  menuItems.forEach((menuItem) => {
    const item = document.createElement("li");
    menuItem.textContent = item.title;
    menuList.append(item);
  });

  menuListContainer.append(menuListTitle);
  menuListContainer.append(menuList);

  return menuListContainer;
}
