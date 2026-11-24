const menuCards = document.querySelectorAll('.menu-item');

menuCards.forEach((card) => {
	card.addEventListener('mouseenter', () => {
		card.classList.add('active');
	});
	card.addEventListener('mouseleave', () => {
		card.classList.remove('active');
	})
});

const menuTag = document.getElementsByTagName("menu")[0];
fetch("assets/menu.json").then(response => response.json()).then(data => {
	for (const element of data.items) {
		const menuItemElem = document.createElement("button"),
		itemInfoElem = document.createElement("div"),
		itemTitleElem = document.createElement("h2"),
		itemPriceElem = document.createElement("p");
		menuItemElem.className = "menu-item", menuItemElem.style.backgroundImage = `linear-gradient(#00000000 60%, #000000df 80%), url("assets/img/${element.image}")`;
		itemInfoElem.className = "item-info";
		itemTitleElem.className = "item-title", itemTitleElem.textContent = element.title;
		itemPriceElem.className = "item-price", itemPriceElem.textContent = "$" + element.price.toFixed(2);
		itemInfoElem.appendChild(itemTitleElem), itemInfoElem.appendChild(itemPriceElem);
		menuItemElem.appendChild(itemInfoElem);
		menuTag.appendChild(menuItemElem);
	}
});