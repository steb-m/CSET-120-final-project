const menuTag = document.getElementsByTagName("menu")[0];
let cart = [];
fetch("assets/menu.json").then(response => response.json()).then(data => {
	for (let i = 0; i < data.items.length; i++) {
		const menuItemElem = document.createElement("button"),
		itemInfoElem = document.createElement("div"),
		itemTitleElem = document.createElement("h2"),
		itemPriceElem = document.createElement("p"),
		cartButton = document.createElement("button");
		menuItemElem.className = `menu-item ${data.items[i].category}`;
		menuItemElem.style.backgroundImage = `linear-gradient(#00000000 60%, #000000df 80%), url("assets/img/${data.items[i].image}")`;
		itemInfoElem.className = "item-info";
		itemTitleElem.className = "item-title", itemTitleElem.textContent = data.items[i].title;
		itemPriceElem.className = "item-price", itemPriceElem.textContent = "$" + data.items[i].price.toFixed(2);
		cartButton.className = `menu-cart-button`, cartButton.textContent = "Add to Cart";
		itemInfoElem.appendChild(itemTitleElem), itemInfoElem.appendChild(itemPriceElem);
		menuItemElem.appendChild(itemInfoElem), menuItemElem.appendChild(cartButton);
		menuTag.appendChild(menuItemElem);
	}
});
const menuItemElems = menuTag.getElementsByClassName("menu-item"), showCategory = (category) => {
	if (category === "all") for (const menuItemElem of menuItemElems) {
		menuItemElem.style.display = "";
	} else for (const menuItemElem of menuItemElems) {
		menuItemElem.className.includes(category) ? menuItemElem.style.display = "" : menuItemElem.style.display = "none";
	}
}, addToCart = (item) => {

}