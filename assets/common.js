try { // If cart data not present, set cart to empty arr
	var cart = localStorage.getItem("cart").split(",");
} catch {
	var cart = [];
}
const cartElem = document.getElementById("cart"), updateCart = () => {
	if (cart.length === 0) {
		localStorage.removeItem("cart");
		cartElem.textContent = "Checkout";
	} else {
		localStorage.setItem("cart", cart);
		cartElem.textContent = `Checkout (${cart.length})`;
	}
}
if (cart.length === 0) cartElem.textContent = "Checkout";
else cartElem.textContent = `Checkout (${cart.length})`;