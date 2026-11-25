const checkoutCart = document.getElementById("checkout-cart"), removeFromCart = (item) => {
	cart.splice(cart.indexOf(item.getElementsByClassName("item-title")[0].textContent), 1);
	updateCart();
	item.remove();
}
if (cart.length > 0) fetch("assets/menu.json").then(response => response.json()).then(data => {
	for (const cartItemTitle of cart) {
		const cartItem = data.items.find(item => item.title === cartItemTitle),
		cartItemElem = document.createElement("li"),
		itemContainer = document.createElement("span"),
		detailsContainer = document.createElement("span"),
		itemImgElem = document.createElement("img"),
		itemTitleElem = document.createElement("h2"),
		itemPriceElem = document.createElement("p"),
		quantitySelect = document.createElement("input"),
		removeButton = document.createElement("button");
		cartItemElem.className = "cart-item";
		itemContainer.className = "item-container";
		detailsContainer.className = "details-container";
		itemImgElem.src = `assets/img/${cartItem.image}`;
		itemTitleElem.className = "item-title", itemTitleElem.textContent = cartItemTitle;
		itemPriceElem.className = "item-price";
		itemPriceElem.textContent = `$${cartItem.price.toFixed(2)}`;
		quantitySelect.className = "quantity-select", quantitySelect.type = "number";
		quantitySelect.value = 1;
		removeButton.className = "remove-button", removeButton.textContent = "Remove";
		removeButton.setAttribute("onclick", "removeFromCart(this.parentNode.parentNode);")
		itemContainer.appendChild(itemImgElem), itemContainer.appendChild(itemTitleElem);
		detailsContainer.appendChild(itemPriceElem), detailsContainer.appendChild(quantitySelect);
		detailsContainer.appendChild(removeButton);
		cartItemElem.appendChild(itemContainer), cartItemElem.appendChild(detailsContainer);
		checkoutCart.appendChild(cartItemElem);
	}
});