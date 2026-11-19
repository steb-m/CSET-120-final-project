const menuTag = document.getElementsByTagName("menu")[0],
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
fetch("assets/menu.json").then(response => response.json().then(data => {
	for (let i = 0; i < data.items.length; i++) {
		menuItemElem.getElementsByClassName("item-title")[i].textContent = data.items[i].title;
		menuItemElem.getElementsByClassName("item-price")[i].textContent = data.items[i].price;
		menuItemElem.style.backgroundImage = `linear-gradient(#00000000 60%, #000000df 80%), url("assets/img/${data.items[i].image}")`;
		menuTag.appendChild(menuItemElem);
	}
}));
