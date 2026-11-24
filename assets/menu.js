const menuTag = document.getElementsByTagName("menu")[0];
console.log(cart);
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
		cartButton.className = "menu-cart-button";
		if (cart.includes(itemTitleElem.textContent)) {
			cartButton.textContent = "Remove from Cart";
			cartButton.setAttribute("onclick", `removeFromCart(this);`);
		} else {
			cartButton.textContent = "Add to Cart";
			cartButton.setAttribute("onclick", `addToCart(this);`);
		}
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
}, updateCart = () => {
	if (cart.length === 0) {
		localStorage.removeItem("cart");
		cartElem.textContent = "Checkout";
	} else {
		localStorage.setItem("cart", cart);
		cartElem.textContent = `Checkout (${cart.length})`;
	}
}, addToCart = (button) => {
	cart.push(button.parentNode.getElementsByClassName("item-title")[0].textContent);
	updateCart();
	button.setAttribute("onclick", "removeFromCart(this);");
	button.textContent = "Remove from Cart";
}, removeFromCart = (button) => {
	cart.splice(cart.indexOf(button.parentNode.getElementsByClassName("item-title")[0].textContent), 1);
	updateCart();
	button.setAttribute("onclick", "addToCart(this);");
	button.textContent = "Add to Cart";
}