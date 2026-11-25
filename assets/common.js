const cartElem = document.getElementById("cart"), updateCart = () => {
	if (cart.length === 0) {
		localStorage.removeItem("cart");
		cartElem.textContent = `Checkout`;
	} else {
		localStorage.setItem("cart", cart);
		cartElem.textContent = `Checkout (${cart.length})`;
	}
}
try { // Throws exception if cart data doesn't exist
	var cart = localStorage.getItem("cart").split(",");
	cartElem.textContent += ` (${cart.length})`;
} catch {
	var cart = [];
}