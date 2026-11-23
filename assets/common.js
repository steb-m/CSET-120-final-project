const cartElem = document.getElementById("cart");
try { // If cart cookie not present, set cart to empty arr
	var cart = localStorage.getItem("cart").split(",");
} catch {
	var cart = [];
}
if (cart.length === 0) cartElem.textContent = "Checkout";
else cartElem.textContent = `Checkout (${cart.length})`;