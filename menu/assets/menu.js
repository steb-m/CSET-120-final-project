const menuJSON = fetch("assets/menu.json").then(response => response.json());
console.log(menuJSON);
/*menuTag = document.getElementsByTagName("menu")[0],
menuItemElem = document.createElement("button"),
itemInfoElem = document.createElement("div"),
itemTitleElem = document.createElement("h2"),
itemPriceElem = document.createElement("p");
menuItemElem.className = "menu-item";
itemInfoElem.className = "item-info";
itemTitleElem.className = "item-title";
itemPriceElem.className = "item-price";
itemInfoElem.appendChild(itemTitleElem), itemInfoElem.appendChild(itemPriceElem);
menuItemElem.appendChild(itemInfoElem);
for (let i = 0; i < menuItems.length; i++) {
	menuItemElem.getElementsByClassName("item-title")[0].textContent = menuItems[i][0];
	menuItemElem.getElementsByClassName("item-price")[0].textContent = menuItems[i][1];
	menuItemElem.style.backgroundImage = `linear-gradient(#00000000 60%, #000000df 80%), url("assets/img/${menuItems[i][3]}")`;
	menuTag.appendChild(menuItemElem);
}*/